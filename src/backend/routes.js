const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Require the mealUtils.js file
const {
  getUserPreferences,
  filterRecipes,
  calculateRecipeWeights,
  generateWeeklySchedule
} = require("./heuristic");

const pgp = require("pg-promise")();

const db = pgp({
  host: process.env.POSTGRES_HOST,
  port: 5432,
  database: "simple_meal",
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

// Endpoint for creating weekly schedule
router.post("/api/createWeeklySchedule", async (req, res) => {
  const { userId } = req.body;

  try {
    // Retrieve user preferences
    const {
      meals_per_day: mealsPerDay,
      servings_per_meal: servingsPerMeal,
      weekly_budget: weeklyBudget,
      max_cooking_minutes: maxCookingMinutes,
      restrictions,
      userpreferredcuisines: userPreferredCuisines,
    } = await getUserPreferences(userId);

    // Filter recipes based on dietary restrictions
    const recipes = await filterRecipes(restrictions);

    // Calculate recipe weights
    const avgCost = weeklyBudget / 7 / mealsPerDay / servingsPerMeal;
    const weighted_recipes = await calculateRecipeWeights(recipes, mealsPerDay, avgCost, maxCookingMinutes, userPreferredCuisines);

    const weeklySchedule = await generateWeeklySchedule(weighted_recipes, mealsPerDay, servingsPerMeal, userId);
    res.status(201).json({ weeklySchedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Endpoint for user registration
router.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const currentTime = pgp.as.date(new Date());

    // Perform the insert query with the current timestamp
    await db.none(
      `
       INSERT INTO users(username, created_at, updated_at, password) 
       VALUES($1, $2, $2, $3)`,
      [username, currentTime, hashedPassword]
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/api/getUserId", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await db.one("SELECT id FROM users WHERE username = $1", [
      username,
    ]);
    return res.status(200).json({ id: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/api/getRecipeDetails", async (req, res) => {
  const { recipeId } = req.body;
  try {
    const ingredients = await db.any("SELECT label, quantity FROM recipe_ingredients WHERE recipe_id = $1", [
      recipeId,
    ]);
    const recipe = await db.one("SELECT steps FROM recipes WHERE id = $1", [
      recipeId,
    ]);
    const steps = recipe.steps.replace(/', '/g, '", "').replace(/^\['/, '["').replace(/'\]$/, '"]');
    const instructions = JSON.parse(steps);
    return res.status(200).json({ ingredients, instructions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Endpoint to save user preferences and details
router.post("/api/savePreferences", async (req, res) => {
  const currentTime = pgp.as.date(new Date());
  let {
    userId,
    dietaryRestrictions,
    cuisines,
    mealsPerDay,
    servingsPerMeal,
    maxCookingMinutes,
    weeklyBudget,
  } = req.body;
  try {
    let restrictionIds = [];
    let cuisineIds = [];

    if (dietaryRestrictions != "[]") {
      const dietaryRestrictionsArray = JSON.parse(dietaryRestrictions);
      // Query to fetch IDs of dietary restrictions
      await db
        .map(
          "SELECT id FROM dietary_restrictions WHERE name IN ($1:list)",
          [dietaryRestrictionsArray],
          (row) => row.id
        )
        .then((data) => {
          restrictionIds = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (cuisines != "[]") {
    const cuisineIdsArray = JSON.parse(cuisines);
      // Query to fetch IDs of cuisines
      await db
        .map(
          "SELECT id FROM cuisines WHERE name IN ($1:list)",
          [cuisineIdsArray],
          (row) => row.id
        )
        .then((data) => {
          cuisineIds = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // Start a transaction
    await db.tx(async (t) => {
      // Insert into user_preferences_restrictions table
      for (const restrictionId of restrictionIds) {
        await t.none(
          "INSERT INTO user_preferences_restrictions(user_id, restriction_id) VALUES($1, $2) ON CONFLICT (user_id, restriction_id) DO NOTHING",
          [userId, restrictionId]
        );
      }

      // Insert into user_preferences_cuisines table
      for (const cuisineId of cuisineIds) {
        await t.none(
          "INSERT INTO user_preferences_cuisines(user_id, cuisine_id) VALUES($1, $2) ON CONFLICT (user_id, cuisine_id) DO NOTHING",
          [userId, cuisineId]
        );
      }

      // Update user details
      await t.none(
        "UPDATE users SET meals_per_day = $1, servings_per_meal = $2, max_cooking_minutes = $3, weekly_budget = $4, updated_at = $6 WHERE id = $5",
        [
          mealsPerDay,
          servingsPerMeal,
          maxCookingMinutes,
          weeklyBudget,
          userId,
          currentTime,
        ]
      );
    });

    return res
      .status(200)
      .json({ message: "User preferences and details saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint for user login
router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Retrieve the user's hashed password from the database
    const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    
    // Generate a JWT token for authentication
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      "your_secret_key"
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Health check endpoint
router.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

module.exports = router;

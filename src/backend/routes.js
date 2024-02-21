const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Console } = require("console");
const pgp = require("pg-promise")();

const db = pgp({
  host: "simple-meal-db",
  port: 5432,
  database: "simple_meal",
  user: "postgres",
  password: "Maan_2000",
});

// Endpoint for user registration
router.post("/api/createWeeklySchedule", async (req, res) => {
  const { id } = req.body;
  let weeklySchedule = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  };
  let heuristicStoreForUserRecipies = {};

  try {
    const restrictionIdsQuery = await db.any(
      "SELECT restriction_id FROM user_preferences_restrictions WHERE user_id = $1",
      [id]
    );

    // Extract IDs from the query result
    const restrictionIds = restrictionIdsQuery.map((row) => row.id);

    const restrictionIdString = restrictionIds.join(",");
    console.log("HERE IS THE RESCTPKN ID");
    console.log(restrictionIdString);
    const filteredNonRestrictedRecipies = await db.none(
      `SELECT recipes.id, cuisines.name, recipes.cost, recipes.cooking_minutes
            FROM recipes
            JOIN recipe_cuisines ON recipes.id = recipe_cuisines.recipe_id
            JOIN cuisines ON recipe_cuisines.cuisine_id = cuisines.id
            LEFT JOIN recipe_restrictions ON recipes.id = recipe_restrictions.recipe_id
            WHERE recipe_restrictions.restriction_id NOT IN ($1);
            `,
      [restrictionIdString]
    );
    console.log(filteredNonRestrictedRecipies);

    res.status(201).json({ message: weeklySchedule });
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

// Endpoint to save user preferences and details
router.post("/api/savePreferences", async (req, res) => {
  const currentTime = pgp.as.date(new Date());
  console.log(req.body);
  let {
    userId,
    dietaryRestrictions,
    cuisines,
    mealsPerDay,
    servingsPerMeal,
    maxCookingMinutes,
    weeklyBudget,
  } = req.body;
  console.log(dietaryRestrictions);
  try {
    // Assuming dietaryRestrictions is a comma-separated string like "restriction1,restriction2,restriction3"
    const dietaryRestrictionsArray = dietaryRestrictions.split(",");
    // Query to fetch IDs of dietary restrictions
    let restrictionIds = [];
    await db
      .map(
        "SELECT id FROM dietary_restrictions WHERE name IN ($1:list)",
        [dietaryRestrictionsArray],
        (row) => row.id
      )
      .then((data) => {
        console.log(data);
        restrictionIds = data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Insert into user_preferences_restrictions table
    for (const restrictionId of restrictionIds) {
      await db.none(
        "INSERT INTO user_preferences_restrictions(user_id, restriction_id) VALUES($1, $2)",
        [userId, restrictionId]
      );
    }

    // Assuming cuisines is a comma-separated string like "cuisine1,cuisine2,cuisine3"
    const cuisineIdsArray = cuisines.split(",");

    // Query to fetch IDs of cuisines
    let cuisineIds = [];
    await db
      .map(
        "SELECT id FROM cuisines WHERE name IN ($1:list)",
        [cuisineIdsArray],
        (row) => row.id
      )
      .then((data) => {
        console.log(data);
        cuisineIds = data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Insert into user_preferences_cuisines table
    for (const cuisineId of cuisineIds) {
      await db.none(
        "INSERT INTO user_preferences_cuisines(user_id, cuisine_id) VALUES($1, $2)",
        [userId, cuisineId]
      );
    }

    // Update user details
    await db.none(
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

module.exports = router;

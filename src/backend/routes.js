const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Console, error } = require("console");
const pgp = require("pg-promise")();

const db = pgp({
  host: "simple-meal-db",
  port: 5432,
  database: "simple_meal",
  user: "postgres",
  password: "Maan_2000",
});

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

  try {
    // Retrieve user preferences from the Users table
    const { meals_per_day, weekly_budget, max_cooking_minutes } = await db.one(
      "SELECT meals_per_day, weekly_budget, max_cooking_minutes FROM users WHERE id = $1",
      [id]
    );

    // Retrieve the IDs of dietary restrictions for the user
    let restrictionIds;
    await db
      .map(
        "SELECT restriction_id FROM user_preferences_restrictions WHERE user_id = $1",
        [id],
        (row) => row.restriction_id
      )
      .then((data) => {
        console.log(data);
        restrictionIds = data;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("eljkrher");
    console.log(restrictionIds);

    // Retrieve recipes without restricted ingredients
    const filteredNonRestrictedRecipes = await db.any(
      `SELECT recipes.id, cuisines.name AS cuisine, recipes.cost, recipes.cooking_minutes
         FROM recipes
         JOIN recipe_cuisines ON recipes.id = recipe_cuisines.recipe_id
         JOIN cuisines ON recipe_cuisines.cuisine_id = cuisines.id
         LEFT JOIN recipe_restrictions ON recipes.id = recipe_restrictions.recipe_id
         WHERE recipe_restrictions.restriction_id NOT IN ($1:list)
         ORDER BY recipes.cost ASC`,
      [restrictionIds]
    );

    // Query to fetch cuisine names from user preferences
    const getUserPreferredCuisinesQuery = `
        SELECT cuisines.name
        FROM cuisines
        JOIN user_preferences_cuisines ON cuisines.id = user_preferences_cuisines.cuisine_id
        WHERE user_preferences_cuisines.user_id = $1
        `;
    let userPreferredCuisines;
    try {
      await db
        .map(getUserPreferredCuisinesQuery, [id], (row) => row.name)
        .then((data) => {
          console.log(data);
          userPreferredCuisines = data;
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("User preferred cuisines:", userPreferredCuisines);
    } catch (error) {
      console.error("Error retrieving user preferred cuisines:", error);
    }

    console.log(filteredNonRestrictedRecipes);
    // Calculate weights for each recipe
    for (let recipe of filteredNonRestrictedRecipes) {
      // Assign weights based on cost
      const costWeight = 10 - Math.floor((recipe.cost / weekly_budget) * 10);

      // Assign weights based on cooking minutes
      let cookingTimeWeight;
      if (recipe.cooking_minutes === max_cooking_minutes) {
        cookingTimeWeight = 3;
      } else if (recipe.cooking_minutes < max_cooking_minutes) {
        cookingTimeWeight = 4;
      } else if (recipe.cooking_minutes > max_cooking_minutes) {
        cookingTimeWeight = 2;
      } else {
        cookingTimeWeight = 0;
      }

      // Get cuisine IDs based on user's preferred cuisines
      const cuisineIdsQuery = await db.any(
        "SELECT id FROM cuisines WHERE name IN ($1:csv)",
        [userPreferredCuisines]
      );

      // Extract IDs from the query result
      const cuisineIds = cuisineIdsQuery.map((row) => row.id);

      let cuisineWeight = 0;
      // Check if cuisine IDs match user preferences
      for (const cuisineId of cuisineIds) {
        const isCuisinePreferred = await db.oneOrNone(
          "SELECT COUNT(*) FROM user_preferences_cuisines WHERE user_id = $1 AND cuisine_id = $2",
          [id, cuisineId]
        );
        // If the cuisine is preferred, assign a weight of 5 to the corresponding recipes
        if (isCuisinePreferred) {
          // Loop through recipes and assign weight of 5 to matching recipes

          if (recipe.cuisine_id === cuisineId) {
            cuisineWeight = 5;
          }
        }
      }
      // Calculate the total weight for the recipe
      const totalWeight = costWeight + cookingTimeWeight + cuisineWeight;

      // Assign the total weight to the recipe
      recipe.weight = totalWeight;
    }

    // Sort recipes by weight in descending order
    filteredNonRestrictedRecipes.sort((a, b) => b.weight - a.weight);

    // Assign recipes to each day of the week
    const daysOfWeek = Object.keys(weeklySchedule);
    let recipesIndex = 0;
    for (let i = 0; i < daysOfWeek.length; i++) {
      const day = daysOfWeek[i];
      // Distribute meals for each day based on the user's meals_per_day attribute
      for (let j = 0; j < meals_per_day; j++) {
        weeklySchedule[day].push(filteredNonRestrictedRecipes[recipesIndex]);
        recipesIndex = (recipesIndex + 1) % filteredNonRestrictedRecipes.length;
      }
    }

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
        "INSERT INTO user_preferences_restrictions(user_id, restriction_id) VALUES($1, $2) ON CONFLICT (user_id, restriction_id) DO NOTHING",
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
        "INSERT INTO user_preferences_cuisines(user_id, cuisine_id) VALUES($1, $2) ON CONFLICT (user_id, cuisine_id) DO NOTHING",
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

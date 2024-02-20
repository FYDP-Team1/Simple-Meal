const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Import JWT library for user authentication
const app = express();
const port = 3001;

const db = pgp({
  host: "simple-meal-db",
  port: 5432,
  database: "simple_meal",
  user: "postgres",
  password: "Maan_2000",
});

app.use(cors());
app.use(bodyParser.json());

// Endpoint for user registration
app.post("/api/signup", async (req, res) => {
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

app.post("/api/getUserId", async (req, res) => {
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
app.post("/api/savePreferences", async (req, res) => {
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
    const restrictionIdsQuery = await db.any(
      "SELECT id FROM dietary_restrictions WHERE name = ANY($1)",
      [dietaryRestrictionsArray]
    );

    // Extract IDs from the query result
    const restrictionIds = restrictionIdsQuery.map((row) => row.id);

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
    const cuisineIdsQuery = await db.any(
      "SELECT id FROM cuisines WHERE name = ANY($1)",
      [cuisineIdsArray]
    );

    // Extract IDs from the query result
    const cuisineIds = cuisineIdsQuery.map((row) => row.id);

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
app.post("/api/login", async (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

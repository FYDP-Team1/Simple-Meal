const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const bcrypt = require("bcrypt");
const cors = require("cors"); 
const jwt = require("jsonwebtoken"); // Import JWT library for user authentication
const app = express();
const port = 3001;

const db = pgp({
  host: "localhost",
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

    await db.none("INSERT INTO users(username, password) VALUES($1, $2)", [username, hashedPassword]);
    res.status(201).json({ message: "User registered successfully" });
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
    const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [username]);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user.id, username: user.username }, "your_secret_key");

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

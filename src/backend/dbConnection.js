const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require('dotenv').config();
const port = process.env.REACT_APP_API_PORT;

// Import routes
const routes = require("./routes"); // Adjust the path if your file structure is different

app.use(cors());
app.use(bodyParser.json());

// Use the imported routes
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

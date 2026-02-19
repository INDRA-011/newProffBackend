const express = require("express");
const connectToDB = require("./db/db");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

dotenv.config();
connectToDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Indra Tamang");
});
console.log("Hello World");

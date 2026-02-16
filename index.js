const express = require("express");
const connectToDB = require("./db/db");
const app = express();
const PORT = 5000;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Indra Tamang");
});


const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/userRoute"));

const connectToDB = require("./db/db");
connectToDB();
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Indra Tamang");
});

console.log("backend is running");

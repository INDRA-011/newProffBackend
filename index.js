const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const connectToDB = require("./db/db");
const app = express();

app.use(express.json());

connectToDB();

app.use("/auth", require("./routes/userRoute"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Indra Tamang");
});

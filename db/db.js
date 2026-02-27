// indryznn77_db_user
// w88Tu0VfEKc092Dq
const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://indryznn77_db_user:w88Tu0VfEKc092Dq@cluster0.kufwtzq.mongodb.net/";

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Database connection error: ${error}`);
  }
};

module.exports = connectToDB;
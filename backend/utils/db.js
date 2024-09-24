const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
// const URI = "mongodb://127.0.0.1:27017/";
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;

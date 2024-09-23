const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/";
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(0);
  }
};
module.exports = connectDB;

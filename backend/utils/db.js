const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/";
const URI =
  "mongodb+srv://ssushants786:bang@123@cluster-codeboss.ijfsb.mongodb.net/cluster-codeboss";
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;

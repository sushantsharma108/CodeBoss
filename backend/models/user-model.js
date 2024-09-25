const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Define the model or collection name:
const User = new mongoose.model("Users", userSchema); // 1st param hai collection name joki db me add hone k baad apne aap users ban jayega & doosra hai schema name
module.exports = User;

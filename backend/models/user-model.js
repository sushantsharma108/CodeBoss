const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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

// Hashing the password: Using pre method
userSchema.pre("save", async function (next) {
  // console.log("Pre data ", this);
  const user = this;
  // if password has not been modified, then:
  if (!user.isModified("password")) {
    next();
  }
  // if password has been modified, then:
  try {
    const saltRound = await bcypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});
// Define the model or collection name:
const User = new mongoose.model("Users", userSchema); // 1st param hai collection name joki db me add hone k baad apne aap users ban jayega & doosra hai schema name
module.exports = User;

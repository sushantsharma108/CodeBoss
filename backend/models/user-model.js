const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

// JWT - JSON Web Token: generating jwt using Instance method
// we can create multiple functions using userSchema.methods.func_name() like we did below and use them in any individual file in backend.
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      // used return bcz we called this function in auth-controller.js
      {
        userId: this._id.toString(),
        email: this._email,
        isAdmin: this._isAdmin,
      },
      process.env.JWT_SECRET_KEY, // this is the signature which only server can have so we defined it in .env
      {
        expiresIn: "2d", // optional parameter
      }
    );
  } catch (error) {
    console.error(error);
  }
};
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
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});
// Define the model or collection name:
const User = new mongoose.model("Users", userSchema); // 1st param hai collection name joki db me add hone k baad apne aap users ban jayega & doosra hai schema name
module.exports = User;

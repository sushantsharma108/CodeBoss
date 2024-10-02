const User = require("../models/user-model"); // imported the collection
const bcrypt = require("bcryptjs"); // to hash the password
// Home page logic:
const home = async (req, res) => {
  try {
    res.status(200).json("Welcome to my world....");
  } catch (error) {
    console.log(error);
  }
};

// User registration logic:
// 1. Get registration data: retrieve user data (username, email, password)
// 2. Check email existence: check if email already exists
// 3. Hash password: securely hash the password
// 4. Create user: create a new user with hashed password
// 5. Save to DB: save user data to database
// 6. Respond: Respond with "Registration successful" or handle errors
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // Hash the password: Below method is the 1st one to hash the pwd and 2nd one is showed in user-model.js
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({ username, email, phone, password }); // if user doesn't exist then create...
    res.status(201).json({
      // msg: userCreated,
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    }); //data is username, email, phone, password & token is JWt token which is passed by the server to the client side in cookies/localstorage.
  } 
  catch (error) {
    console.error(error);
    // res.status(500).json("Internal Server Error");
    next(error);
  }
};

// Implementation of Login Logic:
// 1. Get login data: retrieve user data (email, password)
// 2. Check email existence: check if email exists
// 3. Check password: compare the hashed password with the hashed input password
// 4. Generate JWT token: generate a JWT token that will be used for authorization
// 5. Respond: respond with "Login successful" or handle errors
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await userExists.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
    if (isMatch) {
      res.status(200).json({
        msg: "Logged in successfully",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    }
  } catch (err) {
    res.status(400).json({msg: message});
  }
};

module.exports = { home, register, login };

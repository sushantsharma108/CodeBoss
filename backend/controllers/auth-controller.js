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

    const userCreated = await User.create({ username, email, phone, password}); // if user doesn't exist then create...
    res.status(201).json({ msg: userCreated }); //data is username, email, phone, password
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { home, register };
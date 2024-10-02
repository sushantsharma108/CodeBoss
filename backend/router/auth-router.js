const express = require("express");
const router = express.Router(); // express.Router() is a class to handle routes & middlewares
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");  // using Zod here
const validateSchema = require("../middlewares/validator-middleware");

// {home, register} likhne ke bajaye ek reference dekar neeche use object ki tarah treat kar skte hain.
// Below are two methods to define the routes and middlewares
// router.get("/", (req, res) => {
//   res.status(200).send("Hello, We are going to learn the MERN Stack!!!...");
// });

// Below is the second method to define the routes, in which we can use chaining of methods:
router.route("/").get(authControllers.home);

router.route("/register").post(validateSchema(signupSchema), authControllers.register); //1st data will be validated & then a POST reuqest to register route will be sent.

router.route("/login").post(authControllers.login);

module.exports = router;
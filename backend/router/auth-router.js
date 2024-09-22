const express = require("express");
const router = express.Router(); // express.Router() is a class to handle routes & middlewares

// Below are two methods to define the routes and middlewares
router.get("/", (req, res) => {
  res.status(200).send("Hello, We are going to learn the MERN Stack!!!...");
});

// Below is the second method to define the routes, in which we can use chaining of methods:
router
  .route("/")
  .get((req, res) => {
    res.status(200).send("Hello, We are going to register into platform...");
  })
  .post("/", (req, res) => {});

router
  .route("/register")
  .get((req, res) => {
    res.status(200).send("Welcome to the registration page...");
  })
  .post("/", (req, res) => {});

module.exports = router;

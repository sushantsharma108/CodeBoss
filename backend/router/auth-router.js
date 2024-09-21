const express = require("express");
const router = express.Router(); // express.Router() is a class to handle routes & middlewares

router.get("/", (req, res) => {
  res.status(200).send("Hello, We are going to learn the MERN Stack!!!...");
});

module.exports = router;
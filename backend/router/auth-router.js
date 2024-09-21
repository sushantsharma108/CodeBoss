const express = require('express');
const router = express.Router(); // express.Router() is a class to handle routes & middlewares

router.get("/", (req, res) => {
  res.status(200).send(
    "Hello, We are going to learn the MERN Stack and hum usme fod denge!!!..."
  );
});
router.get("/login", (req, res) => {
  res.status(200).send("Hello, We are going to login into platform...");
});
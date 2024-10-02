const express = require("express");
const router = express.Router(); // express.Router() is a class to handle routes & middlewares
const contactForm = require("../controllers/contact-controller");

// Below is the second method to define the routes, in which we can use chaining of methods:
router.route("/contact").post(contactForm);

module.exports = router;

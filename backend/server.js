require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./utils/db");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const errorMiddleware = require("./middlewares/error-middleware");

// Middlewares:
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware); // Error middleware for error responses

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to the database: ${error.message}`);
  });

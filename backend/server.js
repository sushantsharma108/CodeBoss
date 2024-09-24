require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./utils/db");
const router = require("./router/auth-router");
// Middlewares:
app.use(express.json());
app.use("/api/auth", router);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to the database: ${error.message}`);
  });

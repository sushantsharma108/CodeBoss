const express = require("express");
const app = express();
const router = require("./router/auth-router");
// the below code is known as Mounting the router: To use the router in your main express app, you can mount it at a specific URL prefix
app.use("/api/auth", router);
// if we're using the above line of code then we don't need to use the below app.get routes.
// application will use the defined router above and will directly go to the auth-router file on execution

// app.get('/', (req, res) => {
//     res.status(200).send('Hello, We are going to learn the MERN Stack and hum usme fod denge!!!...');
// });
// app.get('/login', (req, res) => {
//     res.status(200).send('Hello, We are going to login into platform...');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, We are going to learn the MERN Stack and hum usme fod denge!!!...');
});
app.get('/login', (req, res) => {
    res.status(200).send('Hello, We are going to login into platform...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
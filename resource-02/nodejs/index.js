// import express module
const express = require('express');

// listen on port 3000
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// run the app using node index.js

// open browser and go to http://localhost:3000

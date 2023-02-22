/**
 * file: app.js
 * date: 01/27/2023
 * description: file responsible for the starting the application
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Fala, pessoal!');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// Create a small HTTP server using Express
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (require, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;

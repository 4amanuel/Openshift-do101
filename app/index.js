const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World version 1');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app;
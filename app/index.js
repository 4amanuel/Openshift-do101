const express = require('express');
const axios = require('axios');
// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

const OWM_API_KEY = process.env.OWM_API_KEY || 'invalid_key';
const UNITS = process.env.UNITS || 'metric';
app.get('/', (req, res) => {
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=' + OWM_API_KEY)
  .then(response => {
    console.log(response.data.url);
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app;
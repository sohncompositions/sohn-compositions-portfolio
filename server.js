const express = require('express');
const config = require('./config');
const emailerRoute = require('./routes/emailer');

const app = express();

app.use(express.json());
app.use('/emailer', emailerRoute)

module.exports = app;
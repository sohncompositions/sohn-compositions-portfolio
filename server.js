const express = require('express');
const { emailerRoute } = require('./routes/emailer');
const { handleError } = require('./middleware/error');
const { validateApiKey } = require('./middleware/auth');
require('./config');

const app = express();

app.use(express.json());
app.use(validateApiKey);
app.use('/emailer', emailerRoute);
app.use(handleError);

module.exports.app = app;
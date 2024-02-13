const express = require('express');
const morgan = require('morgan');
const registerRoutes = require('./routes');

const app = express();

// Middlwares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//Register routes
registerRoutes(app);

module.exports = app;

'use strict';

// required the packages
const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

// add middleware using 'use'
app.get('/', (req, res) => {
  res.send('Hello World From Sukina');
});

app.get('/bad',(req,res) => {
  throw new Error ('something went wrong');
});

app.use ('*', notFoundHandler);
app.use(errorHandler);

function start (port) {
  app.listen (port, () => console.log (`server start on ${port}`));
}

module.exports = {
  app : app,
  start : start,
};

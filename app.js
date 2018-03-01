'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/news', (req, res) => {
  res.send('no news is good news');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});




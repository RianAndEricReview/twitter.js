'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});


app.use(morgan('dev'));

app.use(express.static('public'));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');

let title = 'An example';
let people = [{name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', {title: title, people: people}, (err, output) => {
//   if (err) throw err;
//   console.log(output);
// });

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index', {title: title, people: people});
});

app.get('/news', (req, res) => {
  res.send('no news is good news');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});




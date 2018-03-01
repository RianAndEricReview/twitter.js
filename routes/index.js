const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', (req, res) => {
//   res.sendFile('/Users/eeegee/Fullstack Academy/RianAndEricReview/twitter.js/public/stylesheets/style.css');
// });

module.exports = router;

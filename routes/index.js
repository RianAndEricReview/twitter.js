const express = require('express')
const router = express.Router()
const tweetBank = require('../tweetBank')

module.exports = function (io) {

  router.get('/', function (req, res) {
    let tweets = tweetBank.list()
    res.render( 'index', { tweets: tweets, showForm: true } )
  })

  router.get('/users/:name', function(req, res) {
    var name = req.params.name
    var list = tweetBank.find( {name: name} )
    res.render( 'index', { tweets: list, showForm: true, name: name } )
  })

  router.get('/tweets/:id', function(req, res) {
    var id = +req.params.id
    var tweet = tweetBank.find( {id: id} )
    res.render( 'index', { tweets: tweet } )
  })

  router.post('/tweets', function(req, res) {
    var name = req.body.name
    var text = req.body.text
    tweetBank.add(name, text)
    io.sockets.emit('newTweet', { name: name, text: text })
    res.redirect('/')
  })

  return router
}

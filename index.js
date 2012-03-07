var ntwitter = require('ntwitter')
var request = require('request').defaults({json: true})

var tweets = new ntwitter({
  consumer_key: ''
  consumer_secret: ''
  access_token_key: ''
  access_token_secret: ''
});
var searchOptions = { track: 'macon' }
var couch = "http://admin:password@mycouch.com/databasename"

tweets.stream('statuses/filter', searchOptions, function(stream) {
  stream.on('data', saveTweet);
});

var lastSaved

function saveTweet(tweet) {
  request.post({json: tweet, url: couch}, function(err, resp, body) {
    lastSaved = new Date()
  })
}

require('http').createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end({time: JSON.stringify(lastSaved)});
}).listen(1337);
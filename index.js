var express = require('express');
var http=require('http');
var books = require('google-books-search');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 1128;
app.use(express.static(__dirname+'/client'));

// app.get('/',function(req, res) {
//  });

app.listen(port, function() {
  console.log(`listening on port ${port}`);
   
});

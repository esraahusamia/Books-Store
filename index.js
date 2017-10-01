var express = require('express');
var http=require('http');
var mongoose =require ('mongoose');
var db=require('./database/index');
//var books = require('google-books-search');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var Book=require('./database/model/Book'); 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 1128;
app.use(express.static(__dirname+'/client'));

 // var book=new Book({title:'Personal Confidence & Motivation',auther:'MTD Training',descreption:' is book has been written to help you become more successful in sales.',image:'/images/personal-confidence-and-motivation.jpg',path:'/pdf/personal-confidence-and-motivation.pdf',gener:'Personal Development',rating:0});
     
       // book.save(function (err, book) {
       //  if (err) return console.error(err);
        
       //     });
      // Book.find().exec(function(err, result){
      //  console.log(result);
      // });
app.listen(port, function() {
	//console.log(Book)
  console.log(`listening on port ${port}`);
   
});


//   title: {type: String, index: {unique: true} },
//   auther: String,
//   descreption: String,
//   image:String,
//   path:String,
//   gener:String,
//   rating:Number
// });
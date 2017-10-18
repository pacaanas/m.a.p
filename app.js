var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path. css, javascript
app.use(express.static(path.join(__dirname, 'public')))

//get request
app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log('Server Started on Port 3000...')
});


















/*
Middle ware, this allows anything to be run when the app loads

var logger = function(req, res, next)
{
  console.log("Logging...");
  next();
}

app.use(logger);
*/

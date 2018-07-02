var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var apiRoutes = require('./routes/api');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);
app.get('/', function(req, res) {
  res.json({
    message: 'Welcome to Brevis!'
  });
});

app.listen(4000, function(req, res) {
  console.log("Brevis is now running on port 4000.");
});
module.exports = app;

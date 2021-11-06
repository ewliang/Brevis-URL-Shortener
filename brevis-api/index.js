require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const mongoose = require('mongoose');
const databaseConfig = require('./config/config');

const apiRoutes = require('./routes/api');

const app = express();
app.use(helmet());

mongoose.Promise = require('bluebird');
mongoose.connect(databaseConfig.database.connectionURL, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'There is an error while attempting to connect to the database.'));
db.once('open', function() {
  console.log('Successfully connected to the database [' + db.name + '].');
});

//Cors Setup & Config
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

const port = process.env.PORT || 4000;
app.listen(port, function(req, res) {
  console.log("Brevis is now running on port " + port + ".");
});
module.exports = app;

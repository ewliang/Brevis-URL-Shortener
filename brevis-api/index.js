const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const databaseConfig = require('./config/config');

const apiRoutes = require('./routes/api');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(databaseConfig.database.connectionURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'There is an error while attempting to connect to the database.'));
db.once('open', function() {
  console.log('Successfully connected to the database ' + db.name + '.');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
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

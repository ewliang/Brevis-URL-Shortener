var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

/*
  Public Routes
*/

// GET Entrypoint Page
router.get('/', apiController.getHome);

// POST Generate Shorten URL
router.post('/', apiController.postGenerateShortURL);

// GET Shorten URL by Long URL
router.get('/search', apiController.getShortURL);

// GET Redirect URL via Shorten URL
router.get('/:shorterURL', apiController.redirectByShortURL);


module.exports = router;

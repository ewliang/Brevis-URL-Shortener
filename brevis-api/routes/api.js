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

// GET Redirect URL via Shorten URL
router.get('/:shorterURL', apiController.getShortURL);


module.exports = router;

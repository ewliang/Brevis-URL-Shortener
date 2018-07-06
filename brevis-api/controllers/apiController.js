var ShortURL = require('../models/ShortURL');

/* PUBLIC */
exports.getHome = function(req, res) {
  res.json({
    message: "Welcome to the Brevis API!"
  });
};

/* PRIVATE */
// POST Shorten URL - Generate shorten URL if posted URL does not already exist in database.
exports.postGenerateShortURL = function(req, res) {
  var longURL = req.body.originalURL;
  //Regex for URL
  var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  //Check If Input Is Valid URL String
  if(regex.test(longURL)) {
    console.log("RegEx isValid URL String Format Result: [" + regex.test(longURL) + "]");
    //Check if a URL like this already exists in the database.
    ShortURL.findOne({ 'originalURL': longURL }, (err, data) => {
      if(err) {
        console.log(err);
        return res.json({ error: "Error! This Brevis URL Does Not Exist!" });
      } else {
        if(data == null) {
          console.log("Received URL Input Exists In Database [" + data + "]");

          //Generate Shorten URL String
          var short = Math.floor(Math.random() * 100000).toString();
          //Create New URL Entry Object
          var data = new ShortURL({
            originalURL: longURL,
            shortenURL: short
          });
          //Save Newly Created URL Entry Into Database
          data.save(err => {
            if(err) {
              console.log(err);
              res.json({ message: "Error occurred while attempting to save URL to database." });
            } else {
              console.log("User input URL [" + longURL + "] was successfully saved. Generated short URL [/" + short + "]");
              res.json({ oldURL: longURL, shortenURL: short });
            }
          });
        } else {
          console.log("Received URL Input Exists In Database [" + data + "].");
          console.log("Found originalURL [" + data.originalURL + "] with corresponding shortURL [/" + data.shortenURL + "].");
          var re = new RegExp("^(http|https)://", "i");
          var strToCheck = data.originalURL;
          if(re.test(strToCheck)) {
            res.json({ oldURL: data.originalURL, shortenURL: data.shortenURL });
          } else {
            res.json({ oldURL: data.originalURL, shortenURL: data.shortenURL });
          }
        }
      }
    });
  } else {
    console.log("RegEx isValid URL String Format Result: [" + regex.test(longURL) + "]");
  }
}

exports.getShortURL = function(req, res) {
  var longURL = req.params.longURL;
  ShortURL.findOne({ 'shortenURL': shorterURL }, (err, data) => {
    if(err) {
      console.log("ERROR: Invalid Shorten URL Request Received!");
      res.json({ error: "The requested shorten URL does not exist!" });
    } else {
      if(data == null) {
        console.log("EMPTY DATASET");
      } else {
        console.log("Valid Shorten URL Request Received!");
        var re = new RegExp("^(http|https)://", "i");
        var strToCheck = data.originalURL;
        if(re.test(strToCheck)) {
          res.redirect(302, 'data.originalURL');
        } else {
          res.redirect(302, 'http://' + data.originalURL);
        }
      }
    }
  });
}

// GET Shorten URL - Search DB for shorten URL. Redirect to destination if valid.
exports.redirectByShortURL = function(req, res) {
  var shorterURL = req.params.shorterURL;
  ShortURL.findOne({ 'shortenURL': shorterURL }, (err, data) => {
    if(err) {
      console.log("ERROR: Invalid Shorten URL Request Received!");
      res.json({ error: "The requested shorten URL does not exist!" });
    } else {
      if(data == null) {
        console.log("EMPTY DATASET");
      } else {
        console.log("Valid Shorten URL Request Received!");
        var re = new RegExp("^(http|https)://", "i");
        var strToCheck = data.originalURL;
        // Return the original URL for redirecting via the frontend.
        res.json(data.originalURL);
        /*
        if(re.test(strToCheck)) {
          res.redirect(302, 'data.originalURL');
        } else {
          res.redirect(302, 'http://' + data.originalURL);
        }*/
      }
    }
  });
}

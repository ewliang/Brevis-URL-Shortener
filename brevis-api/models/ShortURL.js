var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShortURLSchema = new Schema(
  {
    originalURL: String,
    shortenURL: String
  },
  {
    timestamps: true
  }
);

var ShortURLModel = mongoose.model('ShortURL', ShortURLSchema);
module.exports = ShortURLModel;

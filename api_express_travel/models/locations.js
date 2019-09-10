const mongoose = require('mongoose');


const LocationSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String, 
  post: String
});

module.exports = mongoose.model('Location', LocationSchema);

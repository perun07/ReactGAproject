const mongoose = require('mongoose');


const LocationSchema = new mongoose.Schema({
  country: String,
  city: String, 
});

module.exports = mongoose.model('Location', LocationSchema);

var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var hotelSchema = new Schema({  
  name:    { type: String },
  stars:     { type: String },
  price:  { type: Number }
});

module.exports = mongoose.model('Hotel', hotelSchema);  
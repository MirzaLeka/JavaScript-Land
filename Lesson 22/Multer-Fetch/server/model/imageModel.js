const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  url: {
    type: String,
    default: ''
  }
});

const Image = mongoose.model('image', imageSchema);
module.exports = Image;

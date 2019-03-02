const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// your DB URI goes here 
mongoose.connect('mongodb://localhost:27017/ImagesDB', { useNewUrlParser: true, useCreateIndex: true });

module.exports = mongoose;

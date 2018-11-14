const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/Lesson 8/webpack/app.js'),
  output: {
    path: path.join(__dirname, '/Lesson 8/webpack/dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
};

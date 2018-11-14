const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/Lesson 8/webpack/app.js'),
  output: {
    path: path.join(__dirname, '/Lesson 8/webpack/dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // what file types we want to run with babel loader & check if file ends with .js
      exclude: /node_modules/ // we are excluding node modules
    }]
  }
};

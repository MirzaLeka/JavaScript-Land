const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/Lesson 8/webpack/app.js'),
  output: {
    path: path.join(__dirname, '/Lesson 8/webpack/dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // what file types we want to run with babel loader & check if file ends with .js
      exclude: /node_modules/ // we are excluding node modules
    }]
  },
  devtool: 'cheap-module-eval-source-map', // finds error in original src. This src map can't be used in production
  devServer: { // starts server on port 8080 and autoreloads
    contentBase: path.join(__dirname, '/Lesson 8/webpack/dist') // static files location
  }
};

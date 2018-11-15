const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/Lesson 8/webpack/app.js'), // main js file
  output: {
    path: path.join(__dirname, '/Lesson 8/webpack/dist'), // output destination
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // what file types we want to run with babel loader & check if file ends with .js
      exclude: /node_modules/ // we are excluding node modules
    }, {
      test: /\.css$/, // looking for any file that ends with .css
      use: [ // we need multiple loaders, so we'll use "use" and setup array of loaders
        'style-loader',
        'css-loader' // we just installed these
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map', // finds error in original src. This src map can't be used in production
  devServer: { // starts server on port 8080 and autoreloads
    contentBase: path.join(__dirname, '/Lesson 8/webpack/dist') // static files location
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

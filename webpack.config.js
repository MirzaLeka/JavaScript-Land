const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  
  const isProduction = env === 'production'; // returns true or false based on env in webpack build, package.json

  return {
    entry: path.join(__dirname, '/Lesson 8/webpack/app.js'), // main js file
    output: {
      path: path.join(__dirname, '/Lesson 8/webpack/dist'), // output destination
      filename: 'bundle.js'
    },
    mode: isProduction ? 'production' : 'development', // this is for dev server
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/, // what file types we want to run with babel loader & check if file ends with .js
        exclude: /node_modules/, // we are excluding node modules
        query: { // specify what kind of code we want to convert to vanilla JS
          presets: ['es2015', 'es2016', 'es2017', 'react', 'env']
        }
      }, {
        test: /\.s?css$/, // ? is there to look for .scss or .css files making 's' optional
        use: [ // when we want to use multiple loaders, we use "use" and setup array of loaders
          'style-loader', // we'll convert sass into css using sass loader
          'css-loader', // then css loader will put css into JS via import 
          'sass-loader' // finally style loader will put that css into the DOM
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', // finds error in original src. One source map for production, another for dev
    devServer: { // starts server on port 8080 and autoreloads
      contentBase: path.join(__dirname, '/Lesson 8/webpack/dist') // static files location - tell server where to look
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }), 
      new HtmlWebpackPlugin({ // since we are not combining files, we do not need loaders
        minify: {
          collapseWhitespace: true // minification
        },
        template: path.join(__dirname, '/Lesson 8/webpack/public/index.html'), // original index.html file destination
      })
    ]
  };
};

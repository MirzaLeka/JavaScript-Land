const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  
  const isProduction = env === 'production'; // returns true or false based on env in webpack build, package.json
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' }); // we'll extract style.css from bundle.js

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
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // we need to enable source maps for css and sass loader
            options: { // we need object to setup options
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map', // finds error in original src. One source map for production, another for dev
    devServer: { // starts server on port 8080 and autoreloads
      contentBase: path.join(__dirname, '/Lesson 8/webpack/dist'), // static files location - tell server where to look
      historyApiFallback: true
    },
    plugins: [
      CSSExtract, // extracting css
      new webpack.ProvidePlugin({ // seting up jquery
        $: 'jquery',
        jQuery: 'jquery'
      }), 
      new HtmlWebpackPlugin({ // compressing html
        minify: { // since we are not combining files, we do not need loaders
          collapseWhitespace: true, // minification
          removeComments: true
        },
        template: path.join(__dirname, '/Lesson 8/webpack/public/index.html'), // original index.html file destination
      })
    ]
  };
};

const path = require('path'); // core NodeJS module
const webpack = require('webpack'); // to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // installed via npm
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // installed via npm


module.exports = (env) => {
  
  const isProduction = env === 'production'; // returns true or false based on env in webpack build, package.json
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' }); // we'll extract style.css from bundle.js

  return {
    entry: path.join(__dirname, '/Lesson 8/webpack/app.js'), // main js file
    output: {
      path: path.join(__dirname, '/Lesson 8/webpack/dist'), // output destination
      filename: 'bundle.js'
    },
    mode: isProduction ? 'production' : 'development', // this is for dev server, --mode 'mode'
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/, // what file types we want to run with babel loader & check if file ends with .js
        exclude: /node_modules/, // we are excluding node modules
        query: { 
          presets: ['es2015', 'es2016', 'es2017', 'react', 'env'] // specify what kind of code we want to convert to vanilla JS
        }
      }, {
        test: /\.s?css$/, // check for any file that ends with .scss or .css making first s optional (?) 
        use: [ 
          MiniCssExtractPlugin.loader, // we specify extract loader
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
      }, {
        test: /\.(png|gif|svg|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader', // images loader => copies images from one place to another
            options: {
              name: 'img/[name].[ext]', // by default file loader will replace file name with some random hash. With this, we'll keep the original name and extension
            } // we're also placing all images inside img folder => img/fileName.ext
          },
          {
            loader: 'image-webpack-loader', // image compression => contains loaders for different types of images
            options: {
              gifsicle: { // gif loader
                interlanced: false
              },
              optipng: { // png loader
                optimizationLevel: 7
              },
              pngquant: { // png loader
                quality: '65-90',
                speed: 4
              },
              mozjpeg: { // jpg loader
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map', // finds error in original src. One source map for production, another for dev. --env 'mode'
    devServer: { // starts server and autoreloads
      port: 3000, // setting default port to 3000
      contentBase: path.join(__dirname, '/Lesson 8/webpack/dist'), // static files location - tell server where to look
      historyApiFallback: {
        index: 'error.html', // renders error.html on every 404 page. Since contentBase is in dist folder, we don't need path here. we just output the error file, which is the same folder as contentBase => dist folder
      },
      open: true, // opens browser when server starts
    },
    plugins: [
      CSSExtract, // extracting css
      new webpack.ProvidePlugin({ // seting up jquery
        $: 'jquery',
        jQuery: 'jquery'
      }), 
      new HtmlWebpackPlugin({ // compressing html
        filename: 'index.html', // we need to give each file a filename, otherwise webpack will consider everything as one file and only save/export the latter .html file
        minify: { // since we are not combining files, we do not need loaders
          collapseWhitespace: true, // minification
          removeComments: true
        },
        inject: false,
        template: path.join(__dirname, '/Lesson 8/webpack/public/index.html'), // original index.html file destination
      }),
      new HtmlWebpackPlugin({ 
        filename: 'error.html',
        minify: { 
          collapseWhitespace: true, 
          removeComments: true
        },
        inject: false,
        template: path.join(__dirname, '/Lesson 8/webpack/public/error.html'), 
      }),
      // new CleanWebpackPlugin([path.join(__dirname, '/Lesson 8/webpack/dist')]) // this we'll clean previous dist folder for us, every time we run build script, instead of doing it manually
      // I commented it out because it removes dist folder in dev-server mode
    ]
  };
};

// Regarding multiple css files: 
// Becuase we're getting all different styles and compiling it into one file, if there are any common styles, one file will overwrite the other
// I guess the best solution is to have multiple tests and also test for array => test: [ /navbar.s?cs$/, /home.s?css$/ ] & bundle these 2 together,
// but then create new test that will leave out error scss for another test => test: [ /navbar.s?css$/, /error.s?css$/ ]
// I think it might work 

// ==> will probably work for multiple js, assuming I don't want all html files to use same script
// or maybe just change entry. one folder for all js,scss files regarding home. another for all js,scss for some other page.

var webpack = require('webpack');
var path = require('path');

var ENV = process.env.NODE_ENV || 'development';

console.log('|*********************************** NODE_ENV: ' + ENV.toUpperCase() + ' ***********************************|');


module.exports = {
  entry: {
    application: './src/index.js'
  },
  output: {
    path: './dist',
    filename: 'application.web.js',
    publicPath: '/'

    //path: path.resolve(__dirname, "dist"),
    //publicPath: "/assets/",
    //filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
  // ,
  // plugins: [
  //   new webpack.NoErrorsPlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //    mangle: {
  //      except: ['exports', 'require']
  //    }
  //   })
  //   ]

};

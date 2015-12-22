'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var noErrorsPlugin = new webpack.NoErrorsPlugin();
var extractCss = new extractTextPlugin('../public/style.css');

module.exports = [{
  name: 'browser',

  entry: {
    client: './src/client/client.app.js',
    host: './src/host/host.app.js'
  },

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ]
  },
  plugins: [
    //commonsPlugin,
    extractCss,
    //noErrorsPlugin
  ],

  watchOptions: {
    poll: true
  }
}];

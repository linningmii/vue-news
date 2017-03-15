const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js?[hash]'
  },
  module: {
    rules: [{
      test: '/\.scss$/',
      use: 'sass-loader'
    }, {
      test: '/\.css$/',
      use: ExtractTextWebpackPlugin.extract({
        use: 'css-loader'
      }),
    }, {
      test: '/\.vue$/',
      use: 'vue-loader'
    }]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css?[hash]'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
};
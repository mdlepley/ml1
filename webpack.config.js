const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

var isProd = process.env.NODE_ENV === 'production'; //true or false

module.exports = {
  entry: {
    app: './client/index.js',
    bootstrap: bootstrapConfig
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}

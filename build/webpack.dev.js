const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('../config')
const base = require('./webpack.base')

module.exports = merge(base, {
  output: {
    publicPath: `http://${config.dev.publichost}:${config.dev.port}/`
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css?sourceMap']
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    }]
  },
  devtool: '#eval-source-map',
  devServer: {
    host: config.dev.host,
    port: config.dev.port,
    historyApiFallback: true,
    proxy: config.dev.proxyTable,
    noInfo: true,
    stats: {
      colors: true,
      chunks: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
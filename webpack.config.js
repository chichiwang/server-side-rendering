const path = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const baseConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: __dirname
  }
};

const clientConfig = {
  entry: ['client.js'],
  output: {
    path: path.join(__dirname, 'dist/client'),
    filename: 'app.js',
    publicPath: '/js/',
  },
};

const serverConfig = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  entry: ['server.js'],
  output: {
    path: path.join(__dirname, 'dist/server'),
    filename: 'app.js',
    publicPath: 'dist/server',
  },
};

const client = Object.assign({}, clientConfig, baseConfig);
const server = Object.assign({}, serverConfig, baseConfig);

module.exports = [client, server];

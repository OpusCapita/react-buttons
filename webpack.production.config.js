'use strict';
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const config = require('./webpack.development.config.js');

config.output = {
  path: path.resolve(__dirname, 'lib'),
  filename: `[name].js`,
  library: '[name]',
  libraryTarget: 'umd'
};

config.externals = [
  nodeExternals({
    modulesFromFile: true
  })
];

delete config.devtool;
delete config.output.publicPath;
delete config.watch;
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true
    },
    comments: false
  })
]);

module.exports = [
  {
    ...config,
    entry: {
      Button: path.resolve(__dirname, './src/client/components/Button')
    }
  },
  {
    ...config,
    entry: {
      TitledButton: path.resolve(__dirname, './src/client/components/TitledButton')
    }
  },
  {
    ...config,
    entry: path.resolve(__dirname, './src/client'),
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: `index.js`,
      library: 'ReactButtons',
      libraryTarget: 'umd'
    }
  },
]

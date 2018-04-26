'use strict';
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const packageVersion = require('./package.json').version;
const host = process.env.HOST ? process.env.HOST : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;

const generateConfig = require('./generateWebpackConfigs');

const config = {
  context: path.resolve(__dirname),
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.HOST': JSON.stringify(host),
      'process.env.PORT': JSON.stringify(port),
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //     screw_ie8: true
    //   },
    //   comments: false
    // }),
    // new webpack.IgnorePlugin(/^(css|less)$/, /components/)
  ],
  externals: [
    nodeExternals({
      modulesFromFile: true
    }),
    /^\.{1,2}\/([\w-.]\/)*(.(?!\.(css|less)$))+$/
    // /^components/
  ],
  resolve: {
    root: path.join(__dirname, "node_modules"),
    fallback: [path.join(__dirname, "node_modules")],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.json', '.js'],
    // alias: {
    //   components: path.resolve(__dirname, './src/client/components'),
    // }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, "node_modules")],
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },
  postcss: function () {
    return [require('autoprefixer')];
  },
  module: {
    loaders: [
      {
        test   : /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      },
      {
        include: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(css|less)$/,
        loader: `style!css?modules&importLoaders=1&` +
        `localIdentName=[name]__[local]__${packageVersion}_[hash:base64:3]` +
        `!postcss-loader!less?sourceMap`,
        include: /\.module\.(css|less)$/
      },
      {
        test: /\.(css|less)$/,
        loader: `style!css!postcss-loader!less?sourceMap`,
        exclude: /\.module\.(css|less)$/
      },
      {
        test: /.jsx?$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'www')
        ],

        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  }
};
///

// module.exports = [
//   {
//     ...config,
//     entry: {
//       Button: path.resolve(__dirname, './src/client/components/Button')
//     }
//   },
//   {
//     ...config,
//     entry: {
//       TitledButton: path.resolve(__dirname, './src/client/components/TitledButton/TitledButton.react.js')
//     }
//   },
//   {
//     ...config,
//     entry: path.resolve(__dirname, './src/client'),
//     output: {
//       path: path.resolve(__dirname, 'lib'),
//       filename: `index.js`,
//       library: 'ReactButtons',
//       libraryTarget: 'commonjs2'
//     }
//   },
// ]

const dir = path.resolve(__dirname, './src/client');
const outDir = path.resolve(__dirname, './lib');

module.exports = generateConfig({ dir, config, outDir });

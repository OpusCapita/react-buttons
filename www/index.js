const express = require('express');
const path = require('path');
const webpack = require('webpack');
const compiler = webpack(require('../webpack.development.config'));

require('@opuscapita/react-showroom-server').makeLocalScan(path.resolve(__dirname, '../src/client/components'));

const host = process.env.HOST ? process.env.HOST : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;

let serverOptions = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
  noInfo: true
};

const app = express();
app.use(require('webpack-dev-middleware')(compiler, serverOptions));

app.get('/', function(req, res) {
  res.sendFile(path.normalize(__dirname + '/index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`The server is running at http://${host}:${port}/`);
});

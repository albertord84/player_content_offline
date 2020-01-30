const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
var bodyParser = require('body-parser');
var fs = require('fs');

const server = express()
const compiler = webpack(config)

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static('dist'));

server.use(webpackDevMiddleware(compiler))
server.use(webpackHotMiddleware(compiler))



server.post('/savexml', function response(req, res) {
  res.send(req.body);

  fs.writeFile(path.join(__dirname, "/dist/indice.xml"), req.body.data, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
});

server.get('/', function response(req, res) {
  res.sendFile('index.html', {root: __dirname });
});

server.listen(3000, '0.0.0.0' , function onStart(err) {
  if (err) { console.log(err); }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:3000/ in your browser.');
});

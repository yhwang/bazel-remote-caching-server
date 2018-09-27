"use strict";
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const jsDAV = require('jsDAV/lib/jsdav');
const davHandler = jsDAV.mount({
  node: path.join(__dirname, 'data'),
  mount: '/cache',
  server: app,
  standalone: false
});
app.use(function (req, res, next) {
  if (req.url.search(/^\/cache/) >= 0) {
    davHandler.exec(req, res);
  } else {
    next();
  }
});

app.get('/', function (req, res) {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
  console.log('  Press CTRL-C to stop'); 
});

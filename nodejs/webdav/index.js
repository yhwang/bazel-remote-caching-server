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

app.all('/cache/*', (req, res) => {
  davHandler.exec(req, res);
});

//just send ok for root path
app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
  console.log('  Press CTRL-C to stop'); 
});

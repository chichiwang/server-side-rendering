import express from 'express';
import logger from 'connect-logger';

import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './components/Hello';

function handleRequest(req, res) {
  const html = ReactDOMServer.renderToString(
    <Hello name="World" />
  );

  fs.readFile('./templates/index.html', 'utf8', function(err, file) {
    if (err) {
      return console.warn(err);
    }

  const document = file.replace(/<div id="Container"><\/div>/, `<div id="Container">${ html }</div>`);
    res.send(document);
  });
}

const app = express();

app.use(logger());
app.use('/js', express.static(path.join(__dirname, '../client')));
app.get('*', handleRequest);
app.listen(8080);

console.log('Server running on http://127.0.0.1:8080');

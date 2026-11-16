'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT || 8005);
const HOST = process.env.HOST || '127.0.0.1';
const PUBLIC_DIR = path.join(__dirname, 'public');

app.disable('x-powered-by');
app.use(express.static(PUBLIC_DIR, { index: 'index.html' }));

app.listen(PORT, HOST, () => {
  console.log(`Portfolio is running at http://${HOST}:${PORT}`);
});

// Imports
const express = require('express');
const path = require('path');

// App
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

/*********** PATHS ***********/
// Public
const publicPath = path.join(__dirname, "..", "public");

// React Build path
const reactBuildPath = path.join(__dirname, "..",  "react", "build");

// Index.html
const indexPath = path.join(__dirname, "..",  "public", "index.html");

// React Build Index.html
const reactBuildIndexPath = path.join(__dirname, "..",  "react", "build", "index.html");

// Declare react build folder first as Express loads first available index.html from multiple paths!
app.use('/CS3', express.static(reactBuildPath));

// Declare whole public directoy to serve static files
app.use('/CS3', express.static(publicPath));
/*********** PATHS ***********/

console.log(publicPath);

// app.use(express.static(path.join(__dirname, '../react/')));

// const qwe = path.join(__dirname, '../react/');

// __dirname = /home/node/app

// app.get(['/', '/CS1'], (req, res) => {
//   console.warn(req);
//   console.warn('Inside App.get');
//   res.send('Hello World - NodeJS - CS1....111111: ' + indexPath);
//   console.log('After render');
// });

app.get(['/', '/CS3'], (req, res) => {
  res.sendFile(reactBuildIndexPath);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT} app.listen`);
});

// Main starting point of application
const express = require('express');
const http = require('http'); // native node library for working with http requests
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: "*/*" }));

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); // create an HTTP server that receives requests and forwards them to app
server.listen(port);
console.log("Server listening on port " + port);

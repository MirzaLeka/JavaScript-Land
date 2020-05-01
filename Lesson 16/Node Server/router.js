const fs = requre('fs');
const server = require('http').createServer();
const data = {};

server.on('request', (req, res) => {
  switch(req.url) {
    case '/api':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data)); // send JSON response
      break;
    case '/home':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync('path-to-file.html')); // send file
      break;
    case '/':
      res.writeHead(301, { 'Location': '/home' }); // redirect
      res.end();
      break;
    default:
      res.writeHead(404); // send not found
      res.end(); // we need to end request
  }
});

// port
server.listen(3000);

// type http.STATUS_CODES in Node.js REPL to see list of HTTP status codes

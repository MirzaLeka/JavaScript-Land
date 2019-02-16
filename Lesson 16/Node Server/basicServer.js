
// To create a server we use nodejs core module http
const http = require('http');

// we create a server
const server = http.createServer(function(req, res) { 

  // we set content type and send response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey dude!');

});

// port, ip address. Works with localhost keyword as well.
server.listen(3000, '127.0.0.1'); 
console.log("Server is active on port 3000!");

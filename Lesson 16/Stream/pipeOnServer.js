
const http = require('http');
const fs = require('fs');

// we create a server
const server = http.createServer(function(req, res) { 

  // we set content type 
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // we read data from file
  let myReadStream = fs.createReadStream(__dirname + '/file.txt', 'utf8');

  // we pipe data to the response
  myReadStream.pipe(res);
  
  // we get data from the file.txt on website
});

// setting up port
server.listen(3000, '127.0.0.1'); 
console.log("Server is active on port 3000!");

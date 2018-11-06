
// To create a server we use nodejs core module http

const http = require('http');

const server = http.createServer(function(req, res) { 
    // send response header
    res.writeHead(200, {'Content-Type': 'text/plain'}); // we're sending status 2000 and content type plain text

    // to end response we use res.end() in we can respond with some information
    res.end('Hey dude!');

});

// createServer() function creates server, but to handle request and response we need another function
    // request - user requests cetain url (for example)
    // response - we send something to use, load new page (for example)

// when we create request and a response beside sending information back and forth, we're also sending headers,
// request and response headers. headers are extra information about request and reponse, like <head> tag in html.
// head tag gives info about the document, but it will not appear on page.

// type of things we can share in headers: 
// content-type: json, text, html...
// status = 100, 200, 404, 500...
// token = authorization, and so on

// we cant't change request header, but we can the response

// creating port
server.listen(3000, '127.0.0.1'); // port, ip address. works with localhost keyword as well.
console.log("Server is active on port 3000!");
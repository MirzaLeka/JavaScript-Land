
### http module 

*http* is a core module so we do not need to install it

```const http = require('http');```

We start by creating a server

```const server = http.createServer(function(req, res) { ```

**Set a response header**

We're sending status 200 and content type plain text:

```res.writeHead(200, {'Content-Type': 'text/plain'});```

It's very important to set Content-Type (MINE type). Here is a list of MINE types avilable:
* text/plain
* text/html
* text/javascript
* text/css
* image/jpeg
* image/png
* audio/mpeg
* audio/ogg
* audio/*
* video/mp4
* application/*
* application/json
* application/ecmascript
* application/octet-stream

A Multipurpose Internet Mail Extensions (MIME) type is a standard that indicates the nature and format of a document.
```type/subtype```
A MIME type consists of a type and a subtype — two strings separated by /. No whitespace is allowed.

To learn more about MINE types make sure to visit [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
When working with *Express.js* we do not need to to set Content-Type. Express does that for us.

To end a response we use ```res.end()```.

```res.end()``` can take various type of parameters that will be sent to a user on client side.

```res.end('Hello World!');```

```});```

```createServer()``` function creates server. To handle data flow we need a callback function inside with two parameters:
* request - user requests something from the server (for example certain URL)
* response - we send something to user (for example load new page)

When we create request and a response we're also sending headers:
* request header
* response headers.

Headers give extra information about request and reponse, like ```<head>``` tag in html.

```<head>``` tag gives info about the page, but it will not appear on page.

Here are some of the things you can send in header:
* Content-Type (as mentioned above)
* Status (100, 200, 300, 400, 500)
* Token (user authentication), etc.

*We cant't change request header, but we can modify the response.*

Final part is to create a port. This works for the following ip address, but also for localhost.

``` server.listen(3000, '127.0.0.1');  ```
``` console.log("Server is active on port 3000!"); ```

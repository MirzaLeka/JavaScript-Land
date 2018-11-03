const express = require('express'); // we require the module

const app = express(); // we asign variable app to the return result of express() function
// so now we can use app variable to access methods that come with express
// if you have no idea how this works, go to file someLogic.js

// handling request methods
// GET - display data
// POST - create new data
// DELETE - delete data
// PUT / PATCH - update data

// Let's respond to get request
// Syntax: app.get('route', callback function with request and response objects as arguments)

app.get('/', function(req, res) { 
    res.send("This is a home page"); // so whenever user requests/comes to this route, we'll send the message
// we don't need to specify content type. Express is smart enouch to figure that out for us
    });

// we can create as many routes as we want
app.get("/contact", function(req, res)  {
    res.send("This is a contact page");
});

// tell server to listen to a port
app.listen(3000); // will listen on port 3000









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

// app.use() => this means all methods below will use this middleware

// Middleware is executed in order we call app.use(). So if you chose to send file maintenance, 
// but you don't call next(), routes below will never execute.
// What we'll render instead is our maintenance page on all routes

app.use((req, res, next) => {
    res.sendFile(__dirname + "/public/maintenance.html");
    // next(); // remove this comment to be able to access other routes
});


// Route Sample
app.get('/someRoute', function(req, res) { 
    res.send("Hello world!"); // so whenever user requests/comes to this route, we'll send the message
// we don't need to specify content type. Express is smart enouch to figure that out for us
    });


// we can create as many routes as we want
app.get("/contact", function(req, res)  {
    res.send("This is a contact page");
});


// Express route parameters -- Dynamic Routes
// Syntax: /url/:variable

app.get("/profile/:id", (req, res) => {
    res.send("You requested to see a profile with an id of " + req.params.id);
    // Syntax: req.params.nameOfTheVariable. It can be id, it can be name, it can be anything.

    // if we go to this path and type in profile/123, we'll ge the message
    // You requested to see a profile with an id of 123
});


// Send HTML page
app.get("/home", function(req, res) {
    res.sendFile(__dirname + "/public/index.html"); // will load html file when we go to this route
    // Syntax: current directory (__dirname) + path to a file we want to load
});


// Grab multile routes
// it makes no sense to have two routes, one for / and another /home
// so we can gather routes into an array and whenever used visits one or the other we'll render
// home page

app.get(["/", "/home"], function(req, res) {
    res.sendFile(__dirname + "/public/index.html"); // will load html home page on  both routes
})


// send json
app.get("/somejson", (req, res) => {
    res.send({ // when we go to this route we'll get the json below
        user: "Mirza",
        likes: [
            "JS",
            "Games",
            "Traveling"
        ]
    });
});
// there is also res.json() method that gives us a few more options. 
// More about this method in #17 Useful link.txt


// send html without making an html file
app.get("/somehtml", (req, res) => {
    res.send(`<h1>This is some html tag</h1>`); 
});


// send status
app.get('/somestatus', (req, res) => {
    if (res.status(200)) {
        res.send("You're all good!");
    } else {
        res.send("You have an error");
    }
});


// Middlewares and static files

// Middleware is a code in the middle that happens after we request a route and before we send the response

app.get("/newRoute", function(req, res) {
    console.log("Hello World!"); // This is middleware
    res.send("this is new route");

    // Middleware is a code that runs between request and the response. Code in the middle.
});


// Static files are css/js/img files

// Even if we add styles to our html files,
// example: <link rel="stylesheet" type="text/css" href="../assets/styles.css">
// we won't be able to use them without using middlewares. What we'll get is 404

// The reason why that's happening is because whenever we want to render some content,
// we need to build a route that requires that content. 
// just like that, we'll have to create a route to require static files / css, js, images

// Syntax: app.use --> use middleware
// Express has built in middlewares, like express.static which is used to require static files


// Handling middlewares
app.use('/turtle', function(req, res, next) {
    console.log(req.url); // will print '/' and it's taking the URL after /turtle
// so if we type /turtle/leonardo we'll log the result '/leonardo' or /styles.css if we requested that route
    next();
});

// app.use('/turtle') - whenever someone visits this route, this middleware will fire
// middlewares come with next parameter. We use this parameter whenever we have multiple middlewares/routes
// with the same route, like:
// app.get('/'), app.use('/')
// so we put next() at the bottom and we tell mode to switch between middlewares once we're done with the current one

// Note: if the middleware is the last middleware with that route in the file we don't need to call next() 


// Handling static files
app.use("/assets", express.static(__dirname + '/assets'));
// Symtax: /nameOfTheRoute, express.static(directoryWeAreIn + '/nameOfTheFolder');
// In this case they're both assets
// So any request towards /assets will send you towards assets folder where all the static files are

// When using express.static there is no need to use next(); because we'll get automatically
// if we go to route /assets/styles.css (route where our css is) we'll get our entire css file:
/* 
h1{
    color: red;
    font-weight: bold;
}

p{
    color: blue;
} */


// Get multiple html files
// what if we have more html files but we didn't create routes for these files?

app.use(express.static(__dirname + "/public", { extensions: ["html", "htm"]}));
// line above will allow us to use all html files in public folder without making routes

// object in between with extensions key will leave out .html and .htm extensions from route, like
// website.com/home.html
// the object is optional


// if we dom't include this line app.use(express.static(__dirname + "/public", { extensions: ["html", "htm"]}));

// then if we go to localhost:3000/index, we will not get index.html page. In other words, we'll only
// be able to access index page through routes '/' and '/home'


// Handle error page

// if you want to block other routes, like website.com/supermario and all the other routes that don't exits,
// you can create and error page and each time user enters wrong route, server will redirect him to that page

// this code should be right before listening for port

const router = express.Router();

router.use(function(req, res, next) {
    if (!req.route) // if route doesn't exist
        return next (new Error('404'));  
    next();
});

router.use(function(err, req, res, next){
   // res.send(err.message); // we can send error message or send file
   res.sendFile(__dirname + "/public/error.html"); 
})

router.use(function(req, res){
    res.send(app.locals.test + '');
});

 app.use(router);






// tell server to listen to a port
//app.listen(3000); // will listen on port 3000
//console.log("Server started on port 3000"); 

// I can listen to a port like above, but maybe the console log will fire before an app starts listening
// for that reason, I'll console.log server started message inside a callback function

app.listen(3000, function() {
    console.log("Server started on port 3000");
});








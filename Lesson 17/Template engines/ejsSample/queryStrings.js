
// query string exmple : mysite.com/blog/news?page=2
// it's just a name value pair
// we attach query string by writting ? followed by name=value 
// and if there is more than one, we use & to separate the two, example:

// mysite.com/contact?person=ryu%job=ninja

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const urlEncodedParser = bodyParser.urlencoded({ extended: false }); // this function will parse POST data

app.set("view engine", 'ejs');

app.set('views', __dirname + "/views");

app.get('/', function(req, res) {
    res.render("home");
});


app.get('/contact', function(req, res) {
   // console.log(req.query); // will access data on query string

    // so if we write url http://localhost:3000/contact?dept=marketing&person=joe
    // we'll get an object { dept: 'marketing', person: 'joe' }

    res.render("contact", {qs: req.query}); // we can pass query data into our contact view
});


app.post('/contact', urlEncodedParser, function(req, res) { // we need to pass in body-parser middleware
    // data stored in form fields will be stored here and we'll be able to access is using request.body (req.body)

 //   console.log(req.body); // will log form fields values into an object

    // console.log(req.body.who); // will log out input field value with property name="who"
    
    // since we used names in input fields, who, department and email, those 3 will be keys of object we're gonna get
    // req.body example: { who: 'Leonardo', department: 'ninja', email: 'leonardo@ninjaturtles.com' }

    // once request passed through we'll render success page and pass in data from req.body
    res.render("contact-success", {data: req.body});

    // it's important that we render something, otherwise page will just keep loading
        // or send any request, like: res.send("OK!");
});

app.get('/profile/:name', function(req, res) {
    res.render("profile");
});



app.listen(3000, function() {
    console.log("Server started on port 3000");
});
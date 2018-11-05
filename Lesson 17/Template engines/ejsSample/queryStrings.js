
// query string exmple : mysite.com/blog/news?page=2
// it's just a name value pair
// we attach query string by writting ? followed by name=value 
// and if there is more than one, we use & to separate the two, example:

// mysite.com/contact?person=ryu%job=ninja

const express = require('express');
const app = express();

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

app.get('/profile/:name', function(req, res) {
    res.render("profile");
});



app.listen(3000, function() {
    console.log("Server started on port 3000");
});
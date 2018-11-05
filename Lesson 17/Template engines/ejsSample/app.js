
// We use templating engines to build dynamic content

const express = require('express');
const app = express();

// To use templating engine we need to set view engine
app.set("view engine", "ejs"); // what we want to set, which engine we want to tuse

// By default when we request views, templating engine will look inside views folders. So we need to create one
// What makes templating engines great is that we can embed javascript within ejs our code

// When working with templating engines, we don't use sendFile method. Instead we use render method to render view


// Note: As it turns out, by default express wants our views to be in the root JS30/views",
// meaning it will be among other lessons and that's not what we want. 
// So we'll need to tell him to relocate default folder

app.set('views', __dirname + '/views'); // only for this case

// another way to do this is to use path built in module
/* 
const path = require('path');
app.set('views', path.join(__dirname, '/yourViewDirectory'));
*/

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/profile/:name', (req, res) => {
    
    let data = {age: 24, job: "dev", hobbies: ["traveling", "movies", "music"]};

    res.render("profile", {
        person: req.params.name, // we're passing data from the url to a website
        data: data
    }); 

    // we pass in the name of the view, dynamic content (object)
    // we don't need to specify file type, because we already did that in set view engine line
    // we also don't need to use __dirname + path, because once again views folder is default folder
    // and express will look for views inside that folder
    // and also we can pass some data using objects
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
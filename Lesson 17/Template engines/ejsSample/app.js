
// We use templating engines to build dynamic content

const express = require('express');
const app = express();

// To use templating engine we need to set view engine
app.set("view engine", "ejs"); // what we want to set, which engine we want to tuse

// By default when we request views, templating engine will look inside views folders. So we need to create one
// What makes templating engines great is that we can embed javascript within ejs our code

// When working with templating engines, we don't use sendFile method. Instead we use render method to render view

app.get('/', (req, res) => {
    
});

app.get('/contact', (req, res) => {
    
});

app.get('/profile/:name', (req, res) => {
    res.render("profile"); // we pass in the name of the view
    // we don't need to specify file type, because we already did that in set view engine line
    // we also don't need to use __dirname + path, because once again views folder is default folder and express will look there
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
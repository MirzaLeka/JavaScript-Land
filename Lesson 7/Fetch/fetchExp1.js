
// Fetch form file

// Fetch is supported by all modern browsers, but it's not supported by node. For that reason we can install node-fetch module

const fetch = require("node-fetch");

fetch('sample.txt')
.then(res => res.text()) // we are not converting it to json, but rather text 
.then(data => console.log(data)) // now we output the data
.catch(err => console.log(err)); // will be triggered if err

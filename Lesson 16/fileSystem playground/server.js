
const express = require('express');
const path = require('path'); // core module
const fs = require('fs'); // core module

const app = express();

app.use('/resources', express.static(path.join(__dirname, '/resources')));

app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname, '/index.html'));

});


// Controller

app.get('/users', (req, res) => { // route we'll access using Ajax

  const filePath = path.join(__dirname, '/users.json'); // for some reason node wants me to create solid path from root to this directory
  
  fs.readFile(filePath, 'utf-8', (err, data) => { // reading file using async method

    if (err) throw err;

    res.send(data); // sending data from file which we'll be accessible on localhost:3000/users route

  });

});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});


const router = require('express').Router();
const path = require('path');
const fs = require('fs'); // core module
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.json(); // for parsing JSON data


router.get('/users', (req, res) => { // route we'll access using Ajax

  const filePath = path.join(__dirname, '/users.json'); // for some reason node wants me to create solid path from root to this directory
  
  fs.readFile(filePath, 'utf-8', (err, data) => { // reading file using async method

    if (err) throw err;

    res.send(data); // sending data from file which we'll be accessible on localhost:3000/users route

  });

});


router.post('/users', urlencodedParser, (req, res) => { // we are passing uriencodedParser middleware to be able access req.body

  const filePath = path.join(__dirname, '/users.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data); // we are reading data from the file and parsing it into object so we can add new element
  
    data.push(req.body); // req.body is new user object that is being added when we submit
  
    data = JSON.stringify(data); // now when we pushred this to array, we need to turn it back to string
    
    // the reason I'm not using fs.appendfile method is because we would just append our new user object at the bottom of the file, out of the bounds of an array
    // now we need to write data into file again

    fs.writeFile(filePath, data, () => {
      if (err) throw err;
      console.log('User added!');
    });

  });

});

module.exports = router;

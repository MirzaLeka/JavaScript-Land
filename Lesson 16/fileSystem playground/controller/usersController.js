
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

  console.log(req.body);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    
    if (!data) {
      // if file is empty, data will be false, so we'll convert data into an array
      data = [];
    } else {
      // if file wasn't empty, we are reading data from the file and parsing it into object so we can add new element
      data = JSON.parse(data); 
    }

    // req.body is new user object that is being added when we submit
    data.push(req.body); 

    // now when we pushed this to array, we need to turn it back to string
    data = JSON.stringify(data);
    
    // the reason I'm not using fs.appendfile method is because we would just append our new user object at the bottom of the file, out of the bounds of an array
    // now we need to write data into file again

    fs.writeFile(filePath, data, () => {
      if (err) throw err;
      console.log('User added!');
    });

  });

});


router.delete('/users/:username', (req, res) => {

  const filePath = path.join(__dirname, '/users.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    
    // parsing data into object
    data = JSON.parse(data);

    // find index of user whoose username matches the one in the users.json file
    const index = data.findIndex(item => item.username === req.params.username);

    // now we'll use splice to delete the object with the index of index
    data.splice(index, 1);

    // stringifying data
    data = JSON.stringify(data);

    // now we need to rewrite file with data that's left
    fs.writeFile(filePath, data, () => {
      if (err) throw err;
      console.log('User deleted!');
    });

  });

  
});

module.exports = router;

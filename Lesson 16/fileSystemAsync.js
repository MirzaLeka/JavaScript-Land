
// fileSystem using Async methonds => no code blocking
// when we use Sync methods we have suffix Sync, but with Async methods we just remove Sync suffix
// Async functons also come with callback as a must

const fs = require('fs');


// Reading file
// Syntax: fs.readFile('fileName.ext', encoding, callbackFunction(err, data));

fs.readFile('readMe.txt', 'utf8', function (err, data) {
  if (err) throw err; // we have to do this because it's async code
  
  console.log(data); // data argument is the data we read from file
  // so we Don't need, like with sync code, a variable = fs.readFileSync();

});


// Writing files
// Syntax: fs.writeFile('fileName.extension', data we want to insert, callback(err));

fs.readFile('readMe.txt', 'utf8', (err, data) => {
  if (err) {
    return err;
  }

  fs.writeFile('newFile.txt', data, (newErr) => { 
    if (newErr) throw newErr;
    console.log('Changed text in newFile.txt');
  });
});


// Delete files
// Syntax: fs.unlink('fileName', callback(err));

fs.unlink('writeMe.txt', (err) => {
  if (err) throw err;
  console.log('File deleted'); 
  // if there was an error, we'll throw an error, otherwise file will be deleted
});


// Creating directory
// Syntax: fs.mkdir('dirName', callback());

fs.mkdir('stuff', (err) => {
  if (err) throw err;

  console.log('directory created');
});


// Delete directory
fs.rmdir('stuff', (err) => {
  if (err) throw err;
  
  console.log('directory removed');   
  // we can't remove directory that isn't empty, so it's probably best to use fs.unlink 
  // and create fs.rmdir within callback function of fs.unlink. See example below:
});


// Some Async Logic

if (fs.existsSync('async')) { // check if file / folder exists => this is a sync function

  fs.unlink('async/writeMe.txt', (err) => { // deletes file within folder
    if (err) throw err;

    fs.rmdir('async', (dirErr) => { // deletes folder
      if (dirErr) throw dirErr;
      console.log('File and folder removed!');  
    });
  });
    
} else {

  fs.mkdir('async', (err) => { // creates folder
    if (err) throw err;
      
    fs.readFile('readMe.txt', (readErr, data) => { // reads file
      if (readErr) throw readErr;
        
      fs.writeFile('async/writeMe.txt', data, (writeErr) => { // creates new file and saves data from previous file into a new file
        if (writeErr) throw writeErr;
        console.log('New data created!');
      
      });    
    });
  });

}

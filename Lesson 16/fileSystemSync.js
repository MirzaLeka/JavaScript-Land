
// File System (fs) is a core module
// It's used for working with files and folders

const fs = require('fs');


// Reading files
// Syntax: fs.readFileSync('/path/fileName.ext', encoding) => encoding will turn 0s and 1s into letters

const readMe = fs.readFileSync('readMe.txt', 'utf8'); // this is blocking (sync) code
console.log(readMe);


// Writing data into new file
// Syntax: fs.writeFileSync('fileName.extension', 'what do we want to write');

fs.writeFileSync('writeMe.txt', readMe); // this will create new file and write everything from readMe into a new file


// Delete file
// Syntax: fs.unlinkSync('path/fileName.extension);

fs.unlinkSync('writeMe.txt');
console.log('file deleted');

// if we try to delete file that doesn't exist we'll get an error


// Creating directory
// Syntax: fs.mkdirSync('dirName');

fs.mkdirSync('stuff');


// Delete directory
// Syntax: fs.rmdirSync('dirName');

fs.rmdirSync('stuff');

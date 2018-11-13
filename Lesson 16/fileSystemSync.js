
// File System (fs) is a core module
// It's used for working with files and folders

const fs = require('fs');



// fs.readFileSync('path/filename.type', encoding);  // this is a synchronous code, blocking code, meaning it will block the rest of the code below

// so until we read the file nothing will execute
  // this can be useful if we just want to do one action like read/write/delete one file and then close the program

// So we create file readMe.txt, type something inside and thne we read what's inside using fs module

// Reading file
let readMe = fs.readFileSync('readMe.txt', 'utf8'); // we're using variable readMe to store in it all data from readMe.txt file
// we are also using 'utf8' encoding. Without this we would just get get series of numbers.
// The uft8 will encode those numbers into letters and words.

console.log(readMe); // output: YAY this is readMe file! // this is the text from readMe.txt




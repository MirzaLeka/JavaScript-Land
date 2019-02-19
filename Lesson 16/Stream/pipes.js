
// much simpler way of interacting with the stream is to use pipes

const fs = require ('fs');

let myReadStream = fs.createReadStream(__dirname + '/file.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); 

// We'll pipe the data that is coming from readable stream to a writable stream
myReadStream.pipe(myWriteStream);

// this will work exactly the same as the writableStream.js example => reads data, writes data using streams

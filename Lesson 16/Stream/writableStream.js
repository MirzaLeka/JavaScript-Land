
// this time we'll write data from readable stream into files

const fs = require ('fs');

let myReadStream = fs.createReadStream(__dirname + '/file.txt', 'utf8');

// we start by creating writeableStream
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); // name of the file we are saving our data into

myReadStream.on('data', function(chunk) {

// every time we recieve new chunk of data we'll wrrite this chunk of data to a file
myWriteStream.write(chunk);
});

// So we'll transfer everything from one file to another,
// but the difference is we are splitting up the file into little pieces, which is faster for us to consume the data 
// We recieve data faster

// READING STREAMS AND THEN WRITTING STREAMS CAN BE DONE QUICKER USING PIPES


const fs = require ('fs');

// we create a variable where we'll store all the data that will come from the stream
// we'll pick up data from readMe.txt file

// first parameter is path and second parameter is encoding, like 'uft8'
let myReadStream = fs.createReadStream(__dirname + '/file.txt', 'utf8');

// if we don't type encoding will get a bunch of numbers

// createReadStream method by default has a an event named data. 
// We can listen for this event and read the data we will receive before it completely arrives

// utf8 will bring us original text, words

// our variable will inhert the event
myReadStream.on('data', function(chunk) {

 // we'll receive data in a chunks (Buffers), one chunk at the time. Let's proove that
 console.log('New chunk arrived:');
 console.log(chunk);
// 'New chunk arrived' will print out every time new chunk arrives and then we'll see that chunk

});

// The idea is that we split data into chunks so we can start consuming data before all of the data arrives. 

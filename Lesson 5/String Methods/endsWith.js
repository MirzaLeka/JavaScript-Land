
// endssWith() method checks if string ends with with value we provide and returns a boolean

const str = 'Hello, how are you today?'


let check = str.endsWith('today?'); // keep in mind that this is case sensitive

console.log(check); // output: true


check = str.startsWith('world');

console.log(check); // output: false


// we can also check for file types using endsWith

const file = 'Document.pdf'

if ( file.endsWith('.pdf') ) {
  console.log('Yes this is pdf file!');
} 


// same can be used for other file types. Let's say we have images.
// we could type if file.endsWith('.jpg') || file.endsWith('.jpg') || file.endsWith('.jpg'),
// but the more elegant approach is to use regex $ sign which stands for ends with

const image = 'file.png';

if ( image.match(/\.(png|jpg|jpeg)$/) ) { // check if value of image variable ends with either of selected types
  console.log('Yes this is image file!');
}


// startsWith() method checks if string starts with with value we provide and returns a boolean

const str = 'Hello, how are you today?'


let check = str.startsWith('Hello'); // keep in mind that this is case sensitive, so H and h are not the sane

console.log(check); // output: true


check = str.startsWith('World');

console.log(check); // output: false

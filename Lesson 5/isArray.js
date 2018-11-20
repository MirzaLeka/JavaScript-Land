
// Checking if element is an array

const animals = ['dog', 'chicken', 'cat', 'cow', 'sheep'];

// in JavaScript array is a type of object
console.log(typeof animals); // output: object


// To check if variable is array we use two methods:

// a)  Array isArray()
console.log(Array.isArray(animals)); // output: true => animals is array

// b) instanceof Array
console.log(animals instanceof Array); // output: true => array (animals) is instance of Array constructor

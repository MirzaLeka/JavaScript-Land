
// The indexOf() method returns the first index at which a given element can be found in the array
// if element is not in the array this method will return -1 

const animals = ['dog', 'cat', 'bison', 'horse', 'cow'];

// Syntax: array.indexOf(element) => returns index of that element

console.log(animals.indexOf('dog')); // output: 0

console.log(animals.indexOf('bison')); // output: 2

console.log(animals.indexOf('chicken')); // output: -1 => 'chicken' is not in an array


// Swapping variables in JS without using temporary variables

let a = 1;
let b = 2;

console.log('Before swap:');
console.log(a, b); // output: 1 2

[a, b] = [b, a]; // ES6 Destructuring

console.log('After swap:');
console.log(a, b); // output: 2 1

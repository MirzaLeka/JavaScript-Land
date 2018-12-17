
// The Array.of() method creates a new Array instance with a variable number of arguments, 
// regardless of number or type of the arguments


// Example 1:

const num = Array.of(4); 

console.log(num); // output: [ 4 ]


// Example 2: 

const codeName = Array.of(47);

console.log(codeName); // output: [ 47 ]


// Example 3:

const numbers = Array.of(1, 2, 3);

console.log(numbers); // output: [ 1, 2, 3 ]


// Example 4: 

const words = Array.of('Sam', 'Snake', 'Agent 47');

console.log(words); // output: [ 'Sam', 'Snake', 'Agent 47' ]


// Example 5: 

console.log(Array.of(undefined)); // output: [undefined]

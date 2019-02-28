
// Although JavaScript is not type strict language like TypeScript or other languages, we can still change data types on a fly


// toString()
const num = 47; // type number
const numStr = num.toString(); // converting number to String


// Number()
const numString = '47'; // type string
const numNum = Number(numString); // type number
// Alternatives: parseInt(numString), parseFloat(numString), although parseInt and parseFloat have much greater benefit


// Boolean()
const boolStr = 'true'; // type String
const bool = Boolean(boolStr); // type Boolean


// Array.of()
const numbers = Array.of(1, 2, 3, 4, 5); // type object (like all arrays in JS). 
console.log(numbers); // output: [ 1, 2, 3, 4, 5 ]


// JSON.stringify()
const userObject = { user: 'Mirza' }; // type object
const userString = JSON.stringify(userObject); // type string


// JSON.parse()
const animalString = '{"animal": "Dog"}'; // type string
const animalObject = JSON.parse(animalString); // type object


// isNaN()
const name = 'Mirza'; // type string
console.log(isNaN(name)); // output: true
// Type of NaN is number

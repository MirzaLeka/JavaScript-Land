
// The typeof operator returns a string indicating the type of the variable

// Syntax: typeof variable or typeof(variable)


console.log(typeof 'Mirza'); // output: string

console.log(typeof 47); // output: number

console.log(typeof true); // output: boolean


const arr = [1, 2, 3];
console.log(typeof arr); // output: object => arrays are type of object in JS. 
// Check isArray.js to learn how to check if variable is an array


const obj = { name: 'Mirza' };
console.log(typeof obj); // output: object


let age; // works for var too, but not for const, because we need to set that constant value (Missing initializer in const declaration)
console.log(typeof age); // output: undefined => variable is declared but not defined


console.log(typeof NaN); // output: number => type of 'Not A Number' is actually a number


function myFunction() {}
console.log(typeof myFunction); // output: function


const funky = () => 'something';
console.log(typeof funky()); // output: 'string' => becuase we are returning string 'something' and storing it in a variable funky


console.log(typeof (typeof 'some string')); // output: string => becuase type of string is string and type of string is also string - if that makes sense


function User() {}
console.log(typeof new User()); // output: object


console.log(typeof new Date()); // output: object

console.log(typeof new Date().getDate()); // output: number => object.property


const user = new User();
user.name = 'Mirza';
console.log(typeof user.name); // output: string

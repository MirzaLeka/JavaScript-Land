
// immutable is piece of data that we never want to change

let user = { name: ' Mirza' };

// mutation would be to change value

user.name = 'Ermin'; // now name is equal to Ermin


// PRIMITIVE Types:
// Number, String, boolean

let a = 1;
let b = a;
b = 3;

// b will equal 3
// a will still equal 1

// they are Primitive because both a and b have their own memory location, thus they both 'exist' after we asign a to b


// REFERENCE types:
// array, object

// Once asigned Reference types refer to the same memory location

let A = { name: 'Mirza' };
let B = A;

// if we now add new value to B

B.name = 'Amar';

// then A will change as well. Because they Point to same Object in memory. They are the SAME thing now.

console.log(A); // output: { name: 'Amar' }
console.log(B); // output: { name: 'Amar' }

// That extra Object is getting Garbage Collected


// It's worth mentioning that primitive types are stored in Stack
// Reference types are stored in Heaps
// Each Heap has it's place (address) in a Stack

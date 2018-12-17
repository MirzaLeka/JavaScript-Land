
// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object


// Example 1: splitting word into letters and storing them into an array

const name = 'Mirza';

const letters = Array.from(name); // Works just like split 

console.log(letters); // output: [ 'M', 'i', 'r', 'z', 'a' ]


// Example 2: can be used like map

const double = Array.from([1, 2, 3], number => number * 2);

console.log(double); // output:  [2, 4, 6 ]


// Example 3: here is a mix of previous two

const makeAPlan = Array.from('ABC', p => `Plan ${p}`);

console.log(makeAPlan); // output: [ 'Plan A', 'Plan B', 'Plan C' ]


// Example 3: splitting nodelist into an array

// let's assume we have a nodelist

let nodelist = document.querySelectorAll('something');

// since nodelist is an object we can use Array.from to turn it into an array

let arr = Array.from(nodelist); // this will work

// but we can also use spread operator

arr = [...nodelist]; // this will work as well

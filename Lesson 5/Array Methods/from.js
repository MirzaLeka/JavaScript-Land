
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

const nodelist = document.querySelectorAll('something');

// since nodelist is an object we can use Array.from to turn it into an array

let arr = Array.from(nodelist); // this will work

// but we can also use spread operator

arr = [...nodelist]; // this will work as well


// Example 4: storing arguments into an array

function funky() {

  console.log(Array.from(arguments)); // output: [1, 2, 3]

  // or you can just use Rest operator as an argument > function funky(...arg) < and value of arg would be [1, 2, 3]

}

funky(1, 2, 3);


// Example 5: Array from Map 

const m = new Map([[1, 2], [2, 4], [4, 8]]);
const arr = Array.from(m);
console.log(arr); // output: [[1, 2], [2, 4], [4, 8]] => looks the same, but unlike m, arr is type object and is instance of Array


// Example 6: Array from Map with values and keys

const mapper = new Map([['1', 'a'], ['2', 'b']]);

const values = Array.from(mapper.values());
console.log(values); // output: ['a', 'b'];


const keys = Array.from(mapper.keys());
console.log(keys); // output: // ['1', '2'];

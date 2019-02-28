
// Slice function can be used in two ways:
 // cut and return selected elements from an array
 // copy elements one array into another
 
 
// Let's first cut an array

const fruits = ['apple', 'banana', 'orange', 'lemon', 'Mango'];

const sliced = fruits.slice(2,4); // 2 starting index, 4 last index

console.log(sliced); // output: [ 'orange', 'lemon' ]

// but the fruits array will stay the same 
console.log(fruits); // output: [ 'apple', 'banana', 'orange', 'lemon', 'Mango' ]


// but we can also take everything from one index all the way to the end of the array. In that case we just pass 1 parameter

const newArray = fruits.slice(1); // 1 is he starting index

console.log(newArray); // output: [ 'banana', 'orange', 'lemon', 'Mango' ]


// but what if we write slice() without parameters? That's for the other option, copying all elements from one array into another

const copyCat = fruits.slice(); // all fruits we'll be copied to a copyCat array

console.log(copyCat); // and indeed here they are, output: [ 'apple', 'banana', 'orange', 'lemon', 'Mango' ]

// but we can also do that with Spread operator

const spreaded = [...fruits];

console.log(spreaded); // output: [ 'apple', 'banana', 'orange', 'lemon', 'Mango' ]

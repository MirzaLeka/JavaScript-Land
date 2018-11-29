
// SOME - checks if there is an item that meets the condition and returns true or false

const hasNegativeNumbers = [1, 2, 3, -1, 4, 5].some(item => item < 0); // check if any item from array has a value less than 0

console.log(hasNegativeNumbers); // output: true, because -1 is less than 0

// if we'd use FILTER we could filter the negative number (in this example) and return it


// example 2: check for booleans

const bools = [true, false, true, true];

const isFalse = bools.some(bool => bool === false); // checks if there is a false value in bools array (checks for At Least One)

console.log(isFalse); // output: true

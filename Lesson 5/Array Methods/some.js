
// SOME - checks if there is an item that meets the condition and returns true or false

const hasNegativeNumbers = [1,2,3,-1,4,5].some(item => item < 0); // check if any item from array has a value less than 0

console.log(hasNegativeNumbers); // output: true, because -1 is less than 0

// if we'd use FILTER we could filter the negative number (in this example) amd return it
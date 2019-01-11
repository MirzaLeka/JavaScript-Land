
// With ES9 we can use spread operator to find largest or smallest value in array

const arr = [10, 20, 30, 40, 50];

const smallest = Math.min(...arr);
console.log(smallest); // output: 10

// Now let's find the largest

const largest = Math.max(...arr);
console.log(largest); // output: 50

// The way this works is if we had, 
console.log(Math.max(1,2,3,4,5));  // output: 5
// And  that's what we do with spread => spread array into individual numbers

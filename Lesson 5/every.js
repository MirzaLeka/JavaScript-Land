
// EVERY - similar to some. Returns a boolean and checks if every number in an array meets the condition

let arr = [1,2,3,4,5];

const allPositiveNumbers = arr.every(item => item > 0); 

console.log(allPositiveNumbers); // output: true, because all numbers from an array are larger than zero

// if just one number is negative it will return false. So it's all or nothing.
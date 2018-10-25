
// Flats nested arrays into one array
    // Still new and not quite supported

let arr = [1,2,3,[4,5]];

arr = arr.flat(); // outputs: [1,2,3,4,5]
//flat(1) == flat()

// when we have more than one nested array
let numbers = [1,2,3,[4,5,6,[7,8,9]]];

numbers = numbers.flat(2); // outputs [1,2,3,4,5,6,7,8,9]

console.log(numbers);

// Alternative with spread operator | for this example only
let newNumbers = [1,2,3, ...[4,5,6, ...[7,8,9]]];

console.log(newNumbers); // outputs [1,2,3,4,5,6,7,8,9]


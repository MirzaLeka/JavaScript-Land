
// Splitting array

const arr = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J"];

const half = Math.ceil( arr.length / 2 );

// example 1: long way

const firstHalf = arr.filter(function(element, index) {
    return index < half;
});

const secondHalf = arr.filter(function(element, index) {
    return index >= half;
});

console.log(firstHalf); // output: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(secondHalf); // output: [ 'F', 'G', 'H', 'I', 'J' ]

console.log("---------------------------");

// example 2: short way

const leftSide = arr.splice(0, half);
// arr is now the rightSide - what's left after splice

console.log(leftSide); // output: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(arr); // output: [ 'F', 'G', 'H', 'I', 'J' ]


console.log("===========================");
console.log("===========================");

// Scroll down to learn how it all works

// example 1: Filter 

const array1 = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J"];

// to split an array in half1 we first need to find the half1
const half1 = Math.ceil(  array1.length / 2 ); // in case array had odd number of elements, arr.length / 2 would return decimal number, so we're using Math.ceil() just for that case

// in this case half1 == 5

// now we grab first half1 of the array using filter
const first1 = array1.filter(function(element, index) {
    return index < half1; // since half1 == 5, we want all indexes that are less than 5 and those are letters A to E
});

console.log(first1); // output: [ 'A', 'B', 'C', 'D', 'E' ]

const second1 = array1.filter((element, index) => index >= half1); // this time we're going with all indexes that are 5 or larger, because fifth index is letter F

console.log(second1); // output: [ 'F', 'G', 'H', 'I', 'J' ]

// now let's put it together using spread operator

const original1 = [...first1, ...second1];

console.log(original1);  // outout: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ]

console.log("---------------------------");


// example 2: Splice 

// let's create an array

const array2 = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J"];

// then we find then half of it
const half2 = Math.ceil(  array2.length / 2 );

const first2 = array2.splice(0, half2); // Syntax: .splice(startingIndex, length)
// start index is 0 because we want 1st part of the array and length will be half2, because we want 5 letters

console.log(first2); // output: [ 'A', 'B', 'C', 'D', 'E' ]

// for the second array things will be a little different and here is why

// if we now start from half and go all the way to the end an array
const second2 = array2.splice(half2, array2.length); 
// what we'll get is an empty array

console.log(second2); // output: [] 

// The reason we got an empty array is because when we spliced array2, we permenently removed first half an array from array2 variable
// So if we print array2 we'll get what's left in the array after splicing it

console.log(array2); // output: [ 'F', 'G', 'H', 'I', 'J' ]

// thus we don't even need to create variable second2
// we can put it back together using first2 and array2

const original2 = [...first2, ...array2];

console.log(original2); // outout: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ]
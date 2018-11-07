
// Chunk allows us to cut arrays into chunks 

const _ = require ('lodash');

// Syntax: _.chunk(array, number); // number = how many numbers (indexes) will be in chunk

// ket's start by creating an array

const nums = [1,2,3,4,5,6];

let chunked = _.chunk(nums, 2); // after every 2 index cut and place those 2 nums into separate 

console.log(chunked); // output: [ [1,2], [3,4], [5,6] ]

// but if we add number 3

chunked = _.chunk(nums, 3);

console.log(chunked); // output: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// how about 1

chunked = _.chunk(nums, 1);

console.log(chunked); // output: [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]


// Nums array has 6 elements and we cutting array into 2x3 or 3x2 or 1x6. 
    // we can also do 1x4 and the rest will be in another chunk

chunked = _.chunk(nums, 4);

console.log(chunked); // output: [ [ 1, 2, 3, 4 ], [ 5, 6 ] ]

// we can go with 5 and save only [6] in the last chunk, but let's try with entire array

chunked = _.chunk(nums, nums.length);

console.log(chunked); // output: [ [ 1, 2, 3, 4, 5, 6 ] ]


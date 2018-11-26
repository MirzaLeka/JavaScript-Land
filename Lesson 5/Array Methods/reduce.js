
// REDUCE - returns a value after some calculation or array is complete

let nums = [1,2,5,4,3];

// example: 1 - sum of all elements in array with for loop

let sum = 0;
for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum); // output: 15 => 1 + 2 + 3 + 4 + 5

// example 2: using for of loop

let sum2 = 0;
for( let num of nums) {
    sum2 += num;
}

console.log(sum2);  // output: 15


// Reduce function takes two arguments, accumulator and currentValue
    // Accumulator is Always first element in an array
    // currentValue takes value of each element of array per iteration, starting from 2nd array element, because acc is first

// example 1:

let reducedSum = nums.reduce(function(acc, val) {
    return acc + val;
});

console.log(reducedSum);  // output: 15

// we can manually set a value for accumulator, initual value. Other than that it'll be the first item in array

// example 2: 

function sumFunky(acc, val) {
    return acc + val;
}

let getSum = nums.reduce(sumFunky, 10); // now accumulator stars with 10, thus result will be sum of all elements in array + 10

console.log(getSum);  // output: 25

// example 3:  Subtraction of all values

let subtraction = nums.reduce((acc, val) =>  acc - val);

console.log(subtraction); // output: -13 => 1 - 2 - 3 - 4 -5


// example 4: find largest value in array

function findMax(acc, val) {
    if (val > acc) {
        acc = val; // if 2 > 1, acc = 2 and so on
    }
return acc;
}

let max = nums.reduce(findMax);

console.log(max); // output: 5


// example 5: same example but with use of ternary operator

let biggest = nums.reduce((a,b) => a > b ? a : b); // if 1 > 2, no go b; is 2 > 2, no go b; is 5 > 2, yes, go a and so on

console.log(biggest); // output: 5

// This would be an alternative: let biggest = nums.reduce((a,b) => b > a ?  b: a); and result would be the same


// example 6: manually setup accumulator

let manualAcc = nums.reduce((a,b) => a > b ? a : b, 20); // 20 is accumulator, so this will start from 20

// since 20 is larger than any number in our array, [1,2,5,4,3], 20 will be the largest number 

console.log(manualAcc); // output: 20
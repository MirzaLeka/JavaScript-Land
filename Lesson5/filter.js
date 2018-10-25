
// FILTER

// Syntax: Array, Condition, if true return results that are true and wipe those that are false, Create new array

// example 1: Create new array with numbers that are 3 and larger

let nums = [1, 2, 3, 4, 5];

let newNums = nums.filter(num => {
    return num >= 3
});

// this newNums array will contain numbers that match the condition above
console.log(newNums); // output: [ 3, 4, 5 ]

// example 2: return even numbers

let evenNums = nums.filter(num => num % 2 == 0);

console.log(evenNums);  // outputs [ 2, 4 ]

// example 3: return odd numbers

let oddNums = nums.filter(num => num % 2); // this syntax is getting smaller and smaller

console.log(oddNums); // output [ 1, 3, 5 ]

// example 4: return odd numbers with a help of exclamation mark

let notOddNums = nums.filter(x => !(x % 2) );

console.log(notOddNums); // outputs [ 2, 4 ]


// example 5: dealing with undefined

let vals = [1, 2, undefined, 4, 5];

// remove undefined
let newVals = vals.filter(val => val != undefined);

console.log(newVals); // output [ 1, 2, 4, 5 ]

// keep undefined
let undefinedVal = vals.filter(val => !val); // wipe everything that's a normal value

console.log(undefinedVal); // output [ undefined ]

// remove undefined
let newVal2 = vals.filter(x => x);

console.log(newVal2); // again wipes undefined and output is [ 1, 2, 4, 5 ]


// example 6: null 

// null == undefined, but not === undefined, so if

let vals2 = [1, 2, null, 4, 5];

let nullVal = vals.filter(val => val == undefined);  // this would keep undefined in array because it's not strictly equal

console.log(nullVal); // output [ undefined ]


// example 7: remove words with length less than 3 characters

// we start with a string
let str = "It was  a dark and stormy night";

// we need to split it into array. Using regex, we'll split anything that's not word (uppercase W) 
let words = str.split(/\W+/).filter(w => w.length > 3);

console.log(words); // output: [ 'dark', 'stormy', 'night' ] // all have more than 3 characters

// if we have empty spaces we can filter string with a lenght of zero (empty space) with **w => w.length**



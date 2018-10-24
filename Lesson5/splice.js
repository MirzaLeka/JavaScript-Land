
// push, pop, unshift, shift

let nums = [1,2,3,4,5];

// push(n), push adds element to End of an array
nums.push(7);

// pop(), pop removes Last element from an array
nums.pop();

// unshift(n), unshift adds new First element of the array
nums.unshift(10);

// shift(), shift removes First element from an array
nums.shift();

console.log(nums); // because we pushed, poped, unshifted and shifted, this should return the original array

// SPLICE, is used to remove one or many elements from an array

// Syntax: array.splice(index, length);

// nums.splice(3, 2); // removes fourth Index from an array and the next element, because length is too

// nums.splice(2,1); // removes 2nd index form an array and only that index because length is 1

// to wipe whole array we choose the first index (0) and as second argument we choose arr.length
nums.splice(0, nums.length); // outputs empty array

console.log(nums);

// let's say we have array of letters
let letters = ["A", "B", "C", "D", "E"];

// and instead of removing by index we want to remove the letter that user enters, because user doesn't know the indexes of an array
// so what we can do is use findIndex() of letter used entered and remove that letter from an array

// let letter = "B";

// let Index = letters.indexOf(letter); // which is 1
// letters.splice(Index, 1); // so this will remove 1 element from an array which is index is the indexOf letter

// console.log(letters);

// Next step would be to first check if element is in array 
    // and if's not let's push that letter to an array
    // but if that letter already is in an array let's remove it

let newLetter = "Z"; // so Z is not inside an array of letters

    if ( letters.includes(newLetter) ) { // check if Z is inside the array

        letters.splice(letters.indexOf(newLetter), 1); // should work as well

        // let index = letters.indexOf(newLetter);
        //     letters.splice(index, 1); // if it's inside remove it
        } else {
            letters.push(newLetter); // newLetter is not in array and we'll push this new letter to an array
        }

    console.log(letters);


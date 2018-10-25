
// Like sort, reverse saves changes to an original array

// example 1:

let arr = [1,2,3,4,5];

arr.reverse();

console.log(arr);

// example 2: mixed array

let mixed = ["A", 2, "c", 0, "M"];

mixed.reverse();

console.log(mixed); // output: [ 'M', 0, 'c', 2, 'A' ]

// example 3: reversing an array using reduce

let original = [1,2,3,4,5];

// reduce requres a new variable
let reducedArr = original.reduce((ac, item) => {
        ac.unshift(item);
        return ac;
}, []);

console.log("Original: ", original);
console.log("Reduced: ", reducedArr);


// Optional example : reverse a string

let str = "My name is Mirza";

// splitting each character into it's own array element
let splitted = str.split("");

// reversing characters
splitted.reverse();

// joining characters into a string
let joined = splitted.join("");

console.log(joined); // output: azriM si eman yM




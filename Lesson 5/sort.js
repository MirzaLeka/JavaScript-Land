
// SORT
    // doesn't create new array. It sorts the existing array instead
    // so we Don't need to create let sortedArr = arr.sort();

    // filter and map create new array
    // fill and sort act on the existing array
    // reduce is a special case

let vals = [5,4,9,2,1];

vals.sort();

// Sorts by numerical or alphabetical order based on array
console.log(vals);

// array of numbers and letters
let newVal = ["a", 4, "b", 3, "C"];

console.log (newVal.sort()); // outputs [3,4,"C","a","b"] - capital letter comes first

// the reason why numbers come ahead of letters and capital letters in front of lowercase is because sorting is done with ASCII code

// array of objects
let objs = [
    {
      x: 5, y: 6  
    }, {
      x: 2, y: 10  
    },
    {
        x: 3, y: 7
    },
    {
        x: 11, y: 3
    }
];

console.log(objs.sort()); // will not sort, because default sort only works for letters and numbers
// if we want to do more, we need to create our own rules

function compare(a,b) { // requires 2 arguments and compares them to tell which will go before the other
    return a.y - b.y; // 6 - 10 == -4
    // negative number in subtraction means that a comes before b -- smaller value of y comes first

    // if do the opposite, b.y - a.y, then result will be a positive number, thus higher value of y
    // in this case 10, would come first 

    // we can sort by x if we want and we can add more than 2 objects in the array and it work as well
}

console.log(objs.sort(compare));

// filter + sort

let s = "It was a dark and stormy night.";
let words = s.split(/\W+/).filter(word => word.length > 2); // split string into array of words for every word
// filter words that have less than 2 characters and save the remaining in words array

// words.sort(); -- we can sort in alphabetical order

// but we can also sort by length of the word
words.sort((a,b) => a.length - b.length); // same like above if result is negative, shorter words will come first

console.log(words);


// Sort colors and sizes

let colors = [
    {
        color: "red",
        fontWeight: 300
    },
    {
        color: "blue",
        fontWeight: 500
    },
    {
        color: "green",
        fontWeight: 300
    }
];

colors.sort((a,b) =>  a.color > b.color );

console.log(colors); // ouput blue, green, red (objects)

// SPREAD Operator is a brand ne feature in ES6 that allows us to Spread elements from one array into another

// take two arrays into a count:

let first = [1, 2, 3, 4, 5];

const second = [6, 7, 8, 9, 10];

// if we want to combine these arrays, perviously (in ES5), we would need to use concat() method

const combined = first.concat(second);

console.log(combined); // output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => first + second array

// with spread operator we can do exactly the same just by typing 3 dots followed by the name of an array: ...ArrayName

const spreaded = [...first, ...second]; 

console.log(spreaded); // output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => so much simpler


// now you are probably asking yourself, why not simply set one array equal to another

const newArray = first + second;

// well in that case we would get a string as follows

console.log(newArray); // output: 1,2,3,4,5 6,7,8,9,1

// or try something like this

let final = first; 

// now final array would be exactly the same as first

console.log(final); // outout: [ 1, 2, 3, 4, 5 ]

// but the problem with this approrach is that arrays are referece types. So if we push new element into first array it will also reflect into final array

first.push(100);

console.log(first); // output: [ 1, 2, 3, 4, 5, 100 ]

console.log(final); // output: [ 1, 2, 3, 4, 5, 100 ] => yep change is obvious

// now we could avoid this if we (ES5 way) create new array and concat first array into it

let latestArray = [].concat(first);

// now latestArray and first array have the same values but they are not the same

first.push(200);

console.log(first); // output: [ 1, 2, 3, 4, 5, 100, 200 ]

console.log(latestArray); // output: [ 1, 2, 3, 4, 5, 100 ] => as we can see fist and latesArray are not the same


// NOW we can all agree that spread operator is awesome. We don't need to worry about referencing arrays and it's quite simple
// let's come back to spread again to see how it works:

let ILoveSpread = [...first];

first.push(300);

console.log(first); // output:  [ 1, 2, 3, 4, 5, 100, 200, 300 ]

console.log(ILoveSpread); // output:  [ 1, 2, 3, 4, 5, 100, 200 ]

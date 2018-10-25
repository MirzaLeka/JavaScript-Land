
// CONCAT - concats 2 arrays into a single array

let arrOne = [1,2,3];

let arrTwo = [4,5,6];

let combined = arrOne.concat(arrTwo); // add arrTwo at the end of arrOne

console.log(combined); // output: [ 1, 2, 3, 4, 5, 6 ]

// this can be done faster with the use of spread operator

let combined2 = [...arrOne, ...arrTwo];

console.log(combined2); // output: [ 1, 2, 3, 4, 5, 6 ]

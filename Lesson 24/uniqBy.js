
// uniqBy lodash method removes duplicates from an array

const _ = require('lodash'); // we import lodash


// example 1: array of objects

// we create an array
let users = [
{
	"id": 0,
	"name": "Mike"
},
{
	"id": 1,
	"name": "Nick"
},
{
	"id": 2,
	"name": "Sam"
},
{
	"id": 3,
	"name": "Mike"
},
{
	"id": 4,
	"name": "Sam"
},
{
	"id": 5,
	"name": "David"
},
{
	"id": 6,
	"name": "Sam"
}
];

console.log("Original array:\n", users);

console.log("--------------------");

users = _.uniqBy(users, "name"); // Syntax: _.uniqBy(nameOfArray, "property (unique by what)");

console.log("Unique array:\n", users);

// unlike names in previous array, all ids are unique, so using uniqBy method od id would retrieve the orignal array:
// users = _.uniqBy(users, "id"); 

console.log("--------------------");
console.log("--------------------");


// example 2: normal array

let numbers = [1,1,2,2,2,3,3,3,3,4,4,5];

console.log("Original array:\n", numbers);
console.log("--------------------");

// we use the same method

numbers = _.uniqBy(numbers); // since this is not an object, we just pass name of an array

console.log("Unique array:\n", numbers);

console.log("--------------------");
console.log("--------------------");


// alternative way is using vanilla JS, sets

let arr = [1,1,1,1,2,2,1,2,1,2,3,3];

console.log("Original array:\n", arr);
console.log("--------------------");

// this is how we create set
let set = new Set(arr); // sets only hold unique values. so we'll pass the arr array to remove all duplicate values

let uniqArr = [...set]; // because sets return an object, we'll use spread operator to spread values from set object into an array

console.log("Unique array:\n", uniqArr); // output: [1,2,3]

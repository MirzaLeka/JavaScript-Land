
// Size prints size of the collection. It works for string, array, object, set and so on.

const _ = require('lodash');

// Syntax: _.size(Collection);


// example 1: String

let str = "Mirza";

let strLength = _.size(str);

console.log(strLength); // output: 5


// example 2: Array

let arr = [1,2,3];

let arrLength = _.size(arr); 

console.log(arrLength); // output: 3


// example 3: Object

let obj = {name: "Mirza", age: 24};

let objLength = _.size(obj);

console.log(objLength); // output: 2


// example 4: Set

let mySet = new Set();
mySet.add(1).add(2).add("M");

let setLength = _.size(mySet);

console.log(setLength); // output: 3


// example 5: Map

let myMap = new Map();
myMap.set(1,1).set("A",1).set(true,false).set([1,1,1], "ABC");

let mapLength = _.size(myMap);

console.log(mapLength); // output: 4


// example 6: number

let num = 123;

let numLength = _.size(num);

console.log(numLength); // output: 0


// Vanilla JS alternative

console.log("----------------------");

// String

let name = "Mirza";

console.log(name.length); // output: 5

// Array

let nums = [1,2,3];

console.log(nums.length); // output: 3

// Object

let user = {name: "Mirza", age: 24};

console.log( Object.keys(user).length ); // output: 2. This counts number of keys in object, thus this is it's size

// Set

let otherSet = new Set();
otherSet.add(1).add(2).add("M");
console.log(otherSet.size); // output: 3

// Map

let otherMap = new Map();
otherMap.set(1,1).set("A",1).set(true,false).set([1,1,1], "ABC");
console.log(otherMap.size); // output: 4

// Number

let number = 123; 
console.log(number.length); // output: undefined
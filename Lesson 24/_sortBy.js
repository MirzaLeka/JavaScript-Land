
// Sort by returns a sorted array

const _ = require('lodash');


// example 1: array

const nums = [1,4,5,3,2];

const sortedNums = _.sortBy(nums);

console.log(sortedNums); // output: [ 1, 2, 3, 4, 5 ]


// example 2: object

const users = [
    {
        name: "Mirza",
        age: 24
    }, 
    {
        name: "Emir",
        age: 22
    },
    {
        name: "Amar",
        age: 25
    }
];

const sortByAge = _.sortBy(users, "age"); // (arrayName, "property")

console.log(sortByAge); // output: [ { name: 'Emir', age: 22 }, { name: 'Mirza', age: 24 }, { name: 'Amar', age: 25 } ];


const sortByName = _.sortBy(users, "name");

console.log(sortByName); // [ { name: 'Amar', age: 25 },{ name: 'Emir', age: 22 },{ name: 'Mirza', age: 24 } ]
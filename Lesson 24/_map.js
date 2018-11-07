
// let's say we have an array of objects. Using _map we can pick a property that all objects have and store value of that property
// into a new array. if there is no such property we'll get an undefined or array of undefineds

const _ = require('lodash');

// Syntax: _.map(array, "property");

// let's create an array of objects

let users = [
    {
        name: "Mirza",
        age: 24
    },
    {
        name: "Ermin",
        age: 23
    },
    {
        name: "Sinan",
        age: 23
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

// now let's map names

let names = _.map(users, "name");

console.log(names); // [ 'Mirza', 'Ermin', 'Sinan', 'Emir', 'Amar' ]

// if property doesn't exist

names = _.map(users, "job"); // output: [ undefined, undefined, undefined, undefined, undefined ]

console.log(names);
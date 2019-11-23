const _ = require('lodash');

// times calls a function x number of times and returns an array of the results

const numTimes = 5;

function getRandomInteger() {
  return Math.round(Math.random() * 100);
}

const result = _.times(numTimes, getRandomInteger);

console.log(result); // output: [ 27, 97, 26, 8, 60 ]


// if a function is void (no return), what we'll get is an array of undefined

function getUndefined() { }
  
const arrayOfUndefined = _.times(numTimes, getUndefined);
  
console.log(arrayOfUndefined); // output: [ undefined, undefined, undefined, undefined, undefined ]

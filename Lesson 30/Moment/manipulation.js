
// We can manipulate time by adding and subtracting values:
// years, quarters, months, weeks, days, hours, minutes, seconds, miliseconds

const moment = require('moment');

// Syntax: moment().add(value, 'unit up above')


// Let's start with logging the current date

let date = moment();

console.log(date.format('MMM / Do / YYYY')); // output: Dec / 7th / 2018

// Add

date = moment().add(1, 'years'); // adds +1 year to a current year

console.log(date.format('MMM : Do : YYYY')); // output: Dec : 7th : 2019

// Subtract

date = moment().subtract(100, 'days'); // current day - 100 days

console.log(date.format('MMM - Do - YYYY')); // output: Aug - 29th - 2018

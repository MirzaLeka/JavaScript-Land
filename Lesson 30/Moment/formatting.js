
// Unlike it's vanilla JS conterpart, Date object, MomentJS has a very detailed way of formatting 

const moment = require('moment');

const date = moment(); // we are creating new moment object that represents new date in time

console.log(date.format()); // output: 2018-12-06T23:39:25+01:00


// we can pass a formatting argument in format method
// everything depends on number of characters we include

// Month

console.log(date.format('M')); // output: 12 => current month

console.log(date.format('MMM')); // output: Dec (shorthand version of month)

console.log(date.format('MMMM')); // output: December 

// Year

console.log(date.format('YY')); // output: 18

console.log(date.format('MMM YYYY')); // output: Dec 2018 

// Day of the month

console.log(date.format('D')); // output: 6 => it is the 6th of December 2018

console.log(date.format('Do')); // output: 6th

console.log(date.format('DD')); // output: 06 => pads zero to numbers less than 10

// Day of the week

console.log(date.format('d')); // output: 4 (4th day of the week)

console.log(date.format('do')); // output: 4th

console.log(date.format('dd')); // output: Th

console.log(date.format('ddd')); // output: Thu

console.log(date.format('dddd')); // output: Thursday

// Day of the year

console.log(date.format('DDD')); // output: 340 => day in year

console.log(date.format('DDDo')); // output: 340th

console.log(date.format('DDDD')); // output: 340 => pads two zeroes for numbers less than 10 and a single zero for numbers less than 100


// More on formatting
// We can use the shorter syntax like with > new Date() <

console.log(moment().format('MMM Do YYYY')); // output: Dec 6th 2018

// We can add custom formatting in between values

console.log(moment().format('MMM | Do, YYYY')); // output: Dec | 6th, 2018

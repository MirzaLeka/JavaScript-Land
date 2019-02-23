
// using fromNow() method we can display how much years, months, days, hours, minutes and seconds have passed since desired date

const moment = require('moment');

// Official syntax:
  // moment([2007, 0, 29]).fromNow();     // 12 years ago
  // moment([2007, 0, 29]).fromNow(true); // 12 years


// I like to use alternative syntax. Here is how it works:
  // Inside moment() we pass two parameters:
    // first parameter is the day from which we want to calculate time
    // second parameter is formatting - what do we want to return
  // And then we call .fromNow() function

const someDate = moment('2018', 'YYYY').fromNow();
console.log(someDate); // output: a year ago

const newDate = moment('2019 2', 'YYYY M').fromNow();
console.log(newDate); // output: 23 days ago

const theDate = moment('2019 2 23', 'YYYY M DD').fromNow();
console.log(theDate); // output: a day ago

const latestDate = moment('2019 2 23 12', 'YYYY M DD H').fromNow();
console.log(latestDate); // output: 12 hours ago


// We can also pick up current date, format it the way we want and then return how long it has passed since that date

const currentDate = moment().format('YYYY M DD H mm s');
console.log(currentDate); // output: 2019 2 23 23 55 50
  
const fromCurrent = moment(currentDate, "YYYY M DD H mm s").fromNow();
console.log(fromCurrent); // output: a few seconds ago

// if date is in the future, what we'll get is an hour, day, month, year from now

const futureDate = moment('2020', 'YYYY').fromNow();
console.log(futureDate); // output: in 10 months


// To learn more about fromNow() method check out docs below
  // https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/02-fromnow/

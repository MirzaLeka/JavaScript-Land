
// Date Object

// The Date object is used to work with dates and times.
// Date objects are created with new Date().

// Syntax: var d = new Date() or simply > nwe Date() <

const d = new Date(); // we're storitng current date and time at the time of this decalration (program execution)

console.log( d ); // output: 2018-12-06T11:49:05.956Z

// with this being an object of Date() constructor, we can use variable d to call methods


// Get time as Timestamp

console.log( d.getTime() ); // output: 1544097110321

// Timestamp presents current time in miliseconds starting from January 1st 1970 at 00:00:00 hours. 
// Timestamp with a value of 1000 would equal to January 1st 1970 at 00:00:01 making 1000 ms a second further in time

// If we want to travel back in time, before 1970, we are using negative values
// -1000 timestamp would equal to December 31st 1969 at 23:59:59


// We can time the same timestamp using Date.now()
console.log( Date.now() ); 


// Get full year as a four digit number
console.log( d.getFullYear() ); // output: 2018


// 	Get the month as a number (0-11)
console.log( d.getMonth() ); // output: 11. It' December, but since counting starts from 0 (January), December is 11th place


// Get the day as number (1 - 31)
console.log( d.getDate() ); // output: 6. It's sixth December, but unlike getMonth(), numbers here start from 1 and go all the say to 28/29/30/31, depending on the month


// Get the weekday as a number (0-6)
console.log( d.getDay() );	// output: 4. Zeroth day would be Sunday, so Thursday is today and output is 4

// Get the hour (0 - 23);
console.log( d.getHours() ); // output: 13 and indeed it's 1'o clock PM


// Get the minute (0-59);
console.log( d.getMinutes() ); // output: 15


// Get the second (0-59)
console.log( d.getSeconds() ); // output: 50


// Get the millisecond (0-999)
console.log( d.getMilliseconds() ); // output: 538


// Like mentioned above we can get the same values using > new Date() < syntax
console.log( new Date().getFullYear() );  // output: 2018. Same applies for all previous methods


// Formatting => we define arguments we want to present

// Syntax: new Date(year, month, day, hours, minutes, seconds, milliseconds)
// OR: new Date(milliseconds)


const date = new Date(2018, 11, 6, 13, 27, 47, 555); // will return full date with this values

console.log( date ); // output: 2018-12-06T12:27:47.555Z


// Another example, this time with shorter syntax
console.log( new Date(111) ); // output: 1970-01-01T00:00:00.111Z => giving us the initial timestamp date value with our custom value of miliseconds (111)


// To learn more about dates in Javascript be sure to check Useful links file for this lesson

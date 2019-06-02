
// The time-zone offset is the difference, in minutes, from local time to UTC.

const date = new Date();

console.log('Date at your place: ', date);
// output: Sun Jun 02 2019 14:42:06 GMT+0200 (Central European Summer Time)

/* find offset */

const timeOffsetInMS = date.getTimezoneOffset() * 60000; // returns offset in miliseconds
// for my timezone this number will be -7200000 => 2 hours

/* calculate */

date.setTime(date.getTime() + timeOffsetInMS);
// date.getTime() returns current time in miliseconds

console.log('UTC date: ', date);
// output: Sun Jun 02 2019 12:42:06 GMT+0200 (Central European Summer Time)

// date stays type of Date


/* Format date: */

console.log(date.toLocaleDateString("en-US")); // output: 6/2/2019
console.log(date.toLocaleTimeString("en-US")); // output: 12:42:06 PM
// NOTE: This is type String

const combined = `${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString("en-US")}`;
console.log(combined); // output: 6/2/2019 12:42:06 PM


/* If we add language options */

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();

console.log(today.toLocaleDateString("en-US", options)); // output: Sunday, June 2, 2019
console.log(today.toLocaleDateString("hi-IN", options)); // output: रविवार, 2 जून 2019
console.log(today.toLocaleDateString("ja-JP", options)); // output: 2019年6月2日日曜日

// NOTES:
// Using date object in browser and using it in Node.js may give you different results

// When declaring new date: const d = new Date(); 
// Browser will show you time from your computer, while Node.js will give you UTC time

/* Credits: 
* https://stackoverflow.com/a/34015511/7584952
* https://stackoverflow.com/a/46104154/7584952
* https://stackoverflow.com/a/50255425/7584952
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
*/

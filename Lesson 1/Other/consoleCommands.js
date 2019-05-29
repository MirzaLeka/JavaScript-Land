
// The most common way to log something
console.log('Hello World');

// But you can also log a warning
console.warn('This is a warning');

// Log an error 
console.error('This is an error');

// Clear console
console.clear();

// Custom CSS Log
// Syntax: console.log('%c YOUR TEXT', 'CSS YOU WANT TO APPLY');
console.log('%c Hello World', 'color: red;');
// You can go even beyond
console.log(`%c
Hello
World!!!`, `
color: greens;
font-size: 18px;
margin: 20px;
background: black;
padding: 2%;
border-radius: 1pc;
`);

// Print variable name and value like a pro by inserting variable into object
const name = 'Mirza';
console.log({ name }); // output: {name: "mirza"}

/* Log a table */

// array table
const arr = ['Sam', 'Snake', '47'];
// output: index | value
/*
0: 'Sam',
1: 'Snake',
2: 47
*/

// object table
const user = { name: 'Sam', age: 40, job: 'spy' }
// output: key | value
/*
name: 'Sam',
age: 40,
job: 'spy'
*/

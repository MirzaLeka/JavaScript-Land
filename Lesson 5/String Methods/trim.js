
// trim() method removes whitespace from both sides of a string
/* Notes:
 - trim() method does not make changes to original string
 - trim() methods does not have any parameters 
 */

const original = '       Hello World      ';

const trimmed = original.trim();

console.log(trimmed); // output: 'Hello World'


// trim removes whitespace around the string, not in the middle (between the words)

const example2 = '  Hello   VSCode  ';

console.log(example2.trim()); // output: 'Hello   VSCode'

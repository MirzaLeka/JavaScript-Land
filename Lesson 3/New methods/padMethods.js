
// PAD METHODS

// The padStart() & padEnd() methods pad a string with another string until the resulting string
// reaches the supplied length. -- Brandon Morelli, codeburst.io

// padStart() — padding is applied to the left (beginning) side of the string.
// padEnd() — padding is applied to the right (ending) side of the string.


// padStart()

let animal = "cat";

// using padStart() we can pad characters to the start of the string

const paddedAnimal = animal.padStart(10, "A"); // Syntax: padStart(length, character/sWeWantToPad);

console.log(paddedAnimal); // output: AAAAAAAcat

// We set a length to 10, but we already had 3 characters (c,a,t) and what we did was append 7 more 
// characters to fit the overall length of string which is 10.

// So what if we had right amout of characters? 
// What if have a word with 4 characters and we set a length to 10?

let word = 'demo';

const paddedWord = word.padStart(4, "A"); // Because overall length is set to exact same amout as 
// length of variable word, this will log the same word, 'demo', because we can't change that overall length. 
// It's already 4.
// this also works for padEnd();

console.log(paddedWord); // output: 4 


// example with numbers

let bond = 7;

bond = bond.toString(); 

const jamesBond = bond.padStart(3, 0); // So this will repeat infinite times till we hit that overall length, 3

console.log(`The name is Bond, James Bond, but you can call me ${jamesBond}`);


// example with boolean

let name = "James";

const sameName = name.padStart(9, true);

console.log(sameName); // output: trueJames


// example with an array

const arr = [5,6,7,8,9,10,11,12,13,14,15];

// what we can do with this array is add append a zero to all single-digit numbers
// so we need to set overall length to 2

arr.forEach((number) => {
    console.log( number.toString().padStart(2,0) );
});
// output: 05 06 07 08 09 10 11 12 13 14 15

// or we can map it into a new array

const newArr = arr.map((number) => {
    return number.toString().padStart(2,0);
});

console.log(newArr); // output: [ '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15' ]


// example with empty String

const hitman = "";

const agent = hitman.padStart(14, "agent47");

console.log(agent); // output: agent47agent47



// Repeating characters

// if we set a certain length and certain amount of characters we want to append, those characters will repeat till we fit the length

const letter = 'S';

// example with one character

const padMe = letter.padStart(15, "J"); // we'll repeat letter J 14 times

console.log(padMe); // output: JJJJJJJJJJJJJJS

// example with multiple different characters 

const padAll = letter.padStart(15, "abc"); // what this will do is repeat "abc" till we fit the overall length we set

console.log(padAll); // output: abcabcabcabcabS - we hit the length and ran out of characters at the very end and got abS



// padEnd() works just like padStart(), except that it pads characters to end of the string

const framework = "Node";

const language = framework.padEnd(20, "JS");

console.log(language); // output: NodeJSJSJSJSJSJSJSJS

// everything else is the same as for padStart()
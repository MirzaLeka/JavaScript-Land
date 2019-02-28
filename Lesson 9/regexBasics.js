
// Regular Expressions are used to find string within string

// usage:
  // validation => forms
  // occurrences => how many times did this letter, word, number... repeated
  // replacement => replace string withing string

  // create regex:
  const exampleOfRegex = /something Between These Two Slashes/i; // last parameter (/i) is a flag

// flags:
  // /g => global match (find all matches)
  // /i => case insensitive (match strings with upper and lowercase letters)
  // /m => multiline flag
// you can use all 3 flags

  // another way to create regex is using constructor:
  const reg = new RegExp('what do you want to match', 'i') // syntax: 2 strings: pattern, flag


// TEST Regex

// we can check if what we type in matches the value of reg variable
console.log( reg.test('is it a match?') ); // output: false

// even though the following is not exactly the same as previous, we used case insensitive flag, so they are acually the same
console.log( reg.test('WHAT do You want to Match') ); // output: true 


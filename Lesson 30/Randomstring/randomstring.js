
// Library to help you create random strings.

const randomstring = require('randomstring');

const random = randomstring.generate();
console.log(random); // output: MkQFXDB9hwpbpmaJT8PeKrOrcPZxAPLd


const limited = randomstring.generate(5);
console.log(limited); // output: yqX36 => limited to 5 characters


const options = randomstring.generate({
    length: 10,
    charset: 'alphabetic'
  });
console.log(options); // output: GWkCuhgJEw => only letters


const combination = randomstring.generate({
    charset: 'abc'
  });
console.log(combination); // output: abcbcacabbcaacacaaaabcacabbcabca

// Learn more at 
// https://www.npmjs.com/package/randomstring

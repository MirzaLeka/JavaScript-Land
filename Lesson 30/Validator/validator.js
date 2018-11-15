
// Validator.js => A library of string validators and sanitizers

const validator = require('validator');


// check if email is valid email
const email = 'mike@myspace.com';
console.log(validator.isEmail(email)); // output: true


// check if string contains seed
const name = 'Harvey Specter';
console.log(validator.contains(name, 'Harv')); // output: true


// check if the string matches comparison
const str1 = 'Mike';
const str2 = 'mike';
console.log(validator.matches(str1, str2)); // output: false


// check if string is a boolean => it can't be boolean type, because it only works for strings
const bool = 'true';
console.log(validator.isBoolean(bool)); // output: true


// check if the string has a length of zero
const empty = '';
console.log(validator.isEmpty(empty)); // output: true


// check if the string is a number that's divisible by another
const number = '64';
console.log(validator.isDivisibleBy(number, 7)); // output: false => 64 / 7 != integer.


// check if the string is valid JSON 
let json = { name: 'Mirza', age: 24 };
json = JSON.stringify(json);
console.log(validator.isJSON(json)); // output: true


// check if the string is lowercase
const lower = 'harvey specter';
console.log(validator.isLowercase(lower)); // output: true


// check if the string is a valid port number
let port = 3000;
port = port.toString(); // because validator only works with strings
console.log(validator.isPort(port)); // output: true


// check if the string is a hash of type algorithm => Syntax: isHash(str, algorithm)
const hash = '6c7c264b201346ec622614ccc00adba08a39e60b669aea9c1f6c1f60d90238db';
console.log(validator.isHash(hash, 'sha256')); // output: true


// check if the string is valid JWT token
const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmM1ZjU5OWIyYTIxZTJkMjg3ZDE4MjciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQyMjkxOTk4fQ.w0nH4URgYPrQfg4GTdEqC2fwYhmczi-t-3_BxtT7F94';
console.log(validator.isJWT(jwt)); // output: true


// check if the string is a fully qualified domain name (e.g. domain.com)
// Syntax: isFQDN(str [, options])
const domain = 'npmjs.com';
console.log(validator.isFQDN(domain, {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
})); // output: true

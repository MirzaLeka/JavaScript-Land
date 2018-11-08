
// is Methods in lodash check type of value in argument and return boolean

const _ = require('lodash');

// Syntax: _isMethod(variable)

// let's start by creating a simple variable and then we're gonna test it on various is Methods

const name = "Mirza";

console.log( _.isString(name) ); // true, because name is String type

console.log( _.isNumber(name) ); // false

console.log( _.isObject(name) ); // false

console.log( _.isBoolean(name) ); // false

console.log( _.isArray(name) ); // false

console.log( _.isElement(name) ); // false - checks if alue is likely a DOM element (like document.body, which'd return true)

console.log( _.isEmpty(name) ); // false - checks if object (and string) is empty. If name = "", this would return true

console.log( _.isDate(name) ); // false - but if we put > new Date < it will return true

console.log( _.isNaN(name) ); // false 

console.log( _.isNull(name) ); // false

const object = {a: 1};
const other = {a: 1};

console.log( _.isEqual(object, other) ); // true, but they're Not strictly equal (===)

console.log( _.isMatch(object, {a: 1} ) ); // true

console.log( _.isMatch(object, {a: 2} ) ); // false

console.log( _.isMap(name) ); // false

console.log( _.isSet(name) ); // false

console.log( _.isSymbol(name) ); // false

console.log( _.isRegExp(name) ); // false - it's not regular expression, but /Mirza/ is 

// and so on
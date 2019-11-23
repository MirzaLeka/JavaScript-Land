
const _ = require('lodash');

// deburr removes all combining diacritical marks, so "é" becomes "e"

const chars = 'čććžđ';

const updated = _.deburr(chars);

console.log(updated); // output: ccczd

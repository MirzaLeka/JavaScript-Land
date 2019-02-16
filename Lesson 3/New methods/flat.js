
// We use flat to level down nested arrays

// Example 1:

const nested = [1, 2, 3, [4, 5]];

const flatten = nested.flat();

console.log(flatten); // output: [1, 2, 3, 4, 5]

// if we had multiple nested arrays we would need to flatten multple times, either:
 // flatten.flat().flat()... or
 // flatten.flat(number)

 // We can also use Infinity as value to flatten array no matter how much it's nested
const arr = [1, 2, 3, [4, 5, [6, 7, 8, [9]]]];

const flattenArr = arr.flat(Infinity);

console.log(flattenArr); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

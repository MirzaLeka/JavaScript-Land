
// check if string includes set of characters:

const str = 'I love JavasScript';

console.log(str.includes('Java')); // output: true => because str does include characters 'Java'
// note this will not work for string 'java', because original string is different


// check if array includes item:

const names = new Array('Price', 'Soap', 'Gaz');

console.log(names.includes('Gaz')); // output: true => because 'Gaz' is element in names array


// check if object within array includes key with value of value:

const users = [
  {
    name: 'Price'
  }, {
    name: 'Soap'
  }, {
    name: 'Gaz'
  }
];

const playerName = 'Soap';

const includesName = users.some(item => item.name === playerName); // array.some() returns true if there is at least one object (item) in array whose key (name) matches playerName
console.log(includesName); // output: true

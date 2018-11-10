
// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

// example 1: 

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function(element) {
  return element > 10; // so what js does is looks through whole array, left to right until it founds one number that matches the criteria
}); // when it finds that number, it returns it 

console.log(found); // output: 12 -> so 12 is the first number from left to right that is greater than 10

// example 2:

const found2 = array1.find(function(item) {
  return item >= 8; // from left to right, first number equal or greater than 8 is 12
})

console.log(found2); // output: 12


// example 3:

const nums = [1,2,3,4,5];

let findNum = nums.find(item => item == 6); // because there is no such item in array, it will return undefined

console.log(findNum); // output: undefined

// example 4: objects

const objects = [{name: "Mirza"}, {name: "Amar"}, {name: "Sinan"}];

let findObject = objects.find(item => item.name = "Mirza"); // because this name is in an array, it will return that object

console.log(findObject); // output: { name: "Mirza" }
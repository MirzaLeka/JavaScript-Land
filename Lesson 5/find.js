
// FIND - checks if there is an item in an array and returns that item

// example 1:

const nums = [1,2,3,4,5];

let findNum = nums.find(item => item == 6); // because there is no such item in array, it will return undefined

console.log(findNum); // output: undefined

// example 2: objects

const objects = [{name: "Mirza"}, {name: "Amar"}, {name: "Sinan"}];

let findObject = objects.find(item => item.name = "Mirza"); // because this name is in an array, it will return that object

console.log(findObject); // output: { name: "Mirza" }
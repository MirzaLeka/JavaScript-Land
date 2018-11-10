
// FIND INDEX - just like FIND, except that it returns an index of item from an array

// example 1:

var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13; // it will go from left to right till it finds number that satisfies criteria and return it's index
}

console.log(array1.findIndex(findFirstLargeNumber));


// example 2:

const people = [{name: "Ermin"}, {name: "Nino"}, {name: "Emir"}];

const findPerson = people.findIndex(item => item.name == "Ermin"); // this name is in an array, so it'll return an Index of this object

console.log(findPerson); // output: 0, because this objects sits on the first place in an array

// if index is not in an array, this will return -1
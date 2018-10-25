
// FIND INDEX - just like FIND, except that it returns an index of item from an array

const people = [{name: "Ermin"}, {name: "Nino"}, {name: "Emir"}];

const findPerson = people.findIndex(item => item.name == "Ermin"); // this name is in an array, so it'll return an Index of this object

console.log(findPerson); // output: 0, because this objects sits on the first place in an array

// if index is not in an array, this will return -1
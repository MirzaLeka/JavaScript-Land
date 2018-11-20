
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)
// In short, checks if object has certain property and returns boolean

const batman = {
  name: 'Bruce Wayne',
  age: 44,
  47: 'codename'
};

// Syntax: object.hasOwnProperty(property);

console.log(batman.hasOwnProperty('name')); // output: true => batman object has property name
// Notice name is between ' ' because it's string. Otherwise it'd be considered as a variable name

console.log(batman.hasOwnProperty('age')); // output: true

console.log(batman.hasOwnProperty(47)); // output: true
// Notice that we do not need ' ' fro the type number and numbers can't be variable names

// but if there is no such property
console.log(batman.hasOwnProperty('suit')); // output: false


// Better way of checking for properties - ESlint recommendation 
// Syntax: Object.prototype.hasOwnProperty.call(obj, prop);

console.log(Object.prototype.hasOwnProperty.call(batman, 'name')); // output: true


// pick lodash method creates an object composed of the picked object properties

const _ = require('lodash');  // we start by importing lodash

// then we create an object
const user = {
    name: "Mirza",
    age: 24,
    home: "Bosnia",
    favFood: "fish",
    favLng: "JS"
};

// using pick method I can pick of properties from user objects and store it into a new object

// Syntax: _.pick(object, ["property", "property",...]);

// let's pick name, age and favLng properties
let newUser = _.pick(user, ["name", "age", "favLng"]);

// now we stored these props into newUser object, but we didn't change the values
console.log("Old user: \n", newUser); // output: { name: 'Mirza', age: 24, favLng: 'js' }


// since we're now in control of properties we picked, we can change values of properties we picked

newUser.name = "Ermin";
newUser.age = 23;
newUser.favLng = "C#";

// so now if we log newUser variable we'll get different results:

console.log("New user: \n", newUser); // output: { name: 'Ermin', age: 23, favLng: 'C#' }


// alternative way is using ES6 destructuring

let {name, age, favLng} = user; // so we picked 3 properties from user object, stored them into variabes

let anotherUser = { // and now we store them as props of anotherUser object
    name, // name : name (variable)
    age,
    favLng
};

// and now all we have to do is change these values

anotherUser.name = "Amar";
anotherUser.age = 25;
anotherUser.favLng = "C++";

console.log("Another user:\n", anotherUser);


// To achieve the same with less typing we can change object values on a fly
    // we need to rename variables because I already declared name, age and favLng above

let {name: n = "Abdurahman", age: a = 22, favLng : fL = "JS"} = {};

let lastUser = {
    name: n,
    age: a,
    favLng: fL
}

console.log("Last user: \n", lastUser); // output: { name: 'Abdurahman', age: 22, favLng: 'JS' }


// Similar to pick, pickBy lodash method allows us to pick properties by type and save them into a new object

const _ = require('lodash');

// Syntax: const newObj = _.pickBy(object, typeOfWeWantToSave);

// first let's create an object with various types of properties

const user = {
    name: "Mirza",
    age: 24,
    home: "Bosnia",
    favLng: ["JS", "Java", "Pascal"],
    favDB: ["Mongo", "mySQL"],
    kids: {
        noKids: true
    },
    married: false
};

// now let's create new object and store some properties in it

const newUser = _.pickBy(user, _.isNumber); // so we'll first pick only properties that are type Number

console.log("New user: \n", newUser); // output: { age: 24 } -- so it's a new object with age property


// now let's pick only array properties

const anotherUser = _.pickBy(user, _.isArray); 

console.log("Another user: \n", anotherUser);  // output:  { favLng: [ 'JS', 'Java', 'Pascal' ], favDB: [ 'Mongo', 'mySQL' ] }
// just like we wanted, we picked up only properties type array


// we can also pick object

const kids = _.pickBy(user, _.isObject);

console.log("User's kids: \n", kids); // Array is also object, so we're getting two arrays and kids object
// output:  { favLng: [ 'JS', 'Java', 'Pascal' ], favDB: [ 'Mongo', 'mySQL' ], kids: { noKids: true } }


// we can also pick boolean properties

const married = _.pickBy(user, _.isBoolean);

console.log("User is married: \n", married); // output: { married: false }


// and finally we can pick of String type properties

const lastUser = _.pickBy(user, _.isString);

console.log("Last user: \n", lastUser); // output: { name: 'Mirza', home: 'Bosnia' }
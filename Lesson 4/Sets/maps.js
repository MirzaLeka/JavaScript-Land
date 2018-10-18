
// Like sets, maps are data structures that accept any type variable, function, array or an object as a key or as a value
// Maps contain keys and values

let myMap = new Map();

// Setting new values
// Syntax: mapName.set(key, value);

myMap.set(1, 11);
myMap.set("abc", [1,2,3]);

// we can set functions as keys or values

myMap.set("funky", () => console.log("I'm feeling a little funky") );

// to use an object as a key we'll need to create it first 

const hitman = {
    name: "agent"
};

myMap.set(hitman, 47);

// Like Sets, map also contain only unique values
myMap.set(1, 11);

// Printing size of map

console.log("size of map is " + myMap.size); 

// Prints indivudual keys with get

console.log( myMap.get(1) );
console.log( myMap.get("abc") );
console.log( myMap.get(hitman) );

// To call a function we write the following

myMap.get("funky")();

/* --------------------------------------------------- */

// Deleting keys

myMap.delete(hitman);
console.log("Size of map is now " + myMap.size); 

// Check if key exists

console.log("Does map have a key named hitman? " + myMap.has(hitman));

// Print multiple using forEach, for of or for in loops

myMap.forEach((value, key) => {
    console.log(` Key: ${key}, Value: ${value} `);
});

// Local storage is a storage where we can store local variables and all the data we need saving in browser


// Insert item into local storage

localStorage.setItem('myCat', 'Tom') // left: key, right: value

// local storage only works with strings. So if want to store a number or an object, it will be convered into string

localStorage.setItem('codename', 47);

// if we head over to the brwoser, dev tools, application, locao storage, we'll be able to see both of our items we jut stored
// Now let's learn how to get an item and console.log it

let item = localStorage.getItem('codename'); // we put key which in this case is codename

console.log(item); // output: "47"

// Once we grab the key (getItem) we'll be given a value in return.
// As oyu can see output is string, but we can turn it back into number using Number() method

item = Number(item); // from "47" to 47

console.log(typeof item); // output: number


// Retrieve a key with index

// Beside value, we can also retrieve item key, by using index of that key
// Let's pick up the first item, using .key() method and index of that item

const first = localStorage.key(0);
console.log(first); // output: codename

// NOTE: myCat was the first item, but it got pushed to 2nd place when codename item got added to the first position


// Remove item

// Similar to getting an item, to remove one, we just key in and that item will be removed

localStorage.removeItem('codename'); // removed

// now if we try to get item with the key we just removed we'll get a null as a result

item = localStorage.getItem('codename');

console.log(item); // output: null


// Clear storage

// To remove all items in the storage we simply use .clear() method

localStorage.clear(); // all localStorage itmes will be gone


/* Useful tips */

// It is not a substitute for a server based database as information is only stored on the browser
// LocalStorage is limited to 5MB across all major browsers
// LocalStorage is quite insecure as it has no form of data protection and can be accessed by any code on your web page.
// LocalStorage is synchronous. Meaning each operation called would only execute one after the other.

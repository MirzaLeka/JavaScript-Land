
// Imagine you have an array with series of duplicate values you want to remove

let ninjas = ['Ryu', 'Jinn', 'Ken', 'Ryu', 'Kazuya', 'Splinter', 'Kazuya', 'Ken'];

// We can solve the problem using ES6 Sets data structures   
// First we create a new Set and pass our array as an argument

const refineNinjas = new Set(ninjas);

// We'can see that our set is free of duplicates, however set returns an array of objects
console.log(refineNinjas);

// Now we need tranform our set back to an array using spread operator
ninjas = [...refineNinjas];

// Finally ninjas array will be free of all duplicates
console.log(ninjas);


// Credits: Github user iamshaunjp (The Net Ninja)

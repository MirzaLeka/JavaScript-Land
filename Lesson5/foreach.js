
// forEach

let fruits = ["Banana", "Apple", "Waternelon", "Kiwi", "Strawbery", "Pear"];

// Syntax
fruits.forEach((item, index) => {
    console.log( `${index} ${item}` );
});

// item == fruit[i] with for loop
// index == i with for loop

// there can also be a third parameter which represents the array fruits. 

fruits.forEach((item, index, array) => {
    console.log( `${index} ${item}` );
    console.log(array); // console logs array fruits for each iteration
});

// last but not least, we can asign each iteration to a variable

/* Old way 
let add = '';
for (let i = 0; i < fruits.length; i++) {
add+= fruits[i];
}
document.querySelector("element").innerHTML = add;
*/

/* New Way */

let add = '';
fruits.forEach(item => add+= item + " "); // for each item in fruits array add += item 

console.log(add);

// forEach is for printing an array

// sort/reverse/fill is for modifying an existing array

// map/filter/flat is for modifying an existing array, but saving changes into a new array
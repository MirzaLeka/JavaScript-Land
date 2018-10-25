
// FOR OF - useful when counter doesn't play a role, but you want to print every element of an array

let heroes = ["spiderman", "batman", "superman", "aquaman", "ironman", "captain america"];

// old way of printing this is would look like

for (let i = 0; i < heroes.length; i++) {
    console.log( heroes[i] );
}

// in previous example, cunter (i) was not really relevant other than printing [i-th] element from array
// To achieve the same effect wihout using for loop, we can use for of instead

for (let hero of heroes) {
    console.log(hero); // for every hero (item) of heroes (array), print hero (item)
}

// Core feature of for of loop is to iterate through keys. if we for example try to iterate through keys of object below,
// we'll find that Person iobject is not iterable

let Person = {
    fname: "Bruce",
    lname: "Wayne",
    age: 44
};

// for (let p of Person) {
//     console.log(p);
// }

// take an array example into a count. if we were doing for in instead, for in loop would print an indexes
// of each item in array, while for of would print it's values

// similarily *for in* in object would print out values of each key, while for of for object is iterable
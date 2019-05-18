
// Symbols and immutable data types that use unique ids

// we don't use new keyword

// Syntax

let symbol1 = Symbol();
let symbol2 = Symbol("symbol2"); // the ony reason to put text inside is indentify a symbol

// Symbols are unique, thus one symbol will never be equal to another

console.log(symbol1 === symbol2); // outputs false, even if remove the text "symbol2" from the second symbol

console.log(typeof symbol1); // type of symbol is symbol

// if you try to add symbol to a string it will throw an exception
// console.log("symbol: " + symbol1);

// to add symbol to a string will need to convert it useing toString() method
console.log("symbol: " + symbol1.toString());

// Use cases

// 1) symbols can be used as property keys, because symbols are all unique

const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123; // MY_KEY is now a property of object obj
console.log(obj[MY_KEY]);

// obj.MY_KEY = 123; --- Alternative
// console.log(obj.MY_KEY);

// 2) constants representing concepts

const COLOR_RED = Symbol("Red");
const COLOR_ORANGE = Symbol("Orange");
const COLOR_YELLOW = Symbol("Yellow");
const COLOR_GREEN = Symbol("Green");
const COLOR_BLUE = Symbol("Blue");

let customLog = (message, color) => {

    switch (color) {
        case COLOR_RED:
            color = "Red";
            break;
        case COLOR_BLUE:
            color = 'Blue'
            break;
        case COLOR_YELLOW:
            color = 'Yellow'
            break;
        case COLOR_GREEN:
            color = 'Green'
            break;
        case COLOR_ORANGE:
            color = 'Orange'
            break;
        default:
            color = "Black"
    }

    console.log(`%c${message}`, `color: $${color}`); // kinda wish this works but all i get is symbol("color")

}

    customLog("Hello World");
    customLog("Green", COLOR_GREEN);

 // Symbols can't be enumerated


/* Symbol.prototype.description */

 // You can now retrieve the description of a symbol by accessing its description property 

 const testSymbol = Symbol('test');
 console.log(testSymbol.description); // output: test

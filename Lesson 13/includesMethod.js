
// includes() => checks if array contains certain value and returns true or false

let array = [1,2,3,4,5];

console.log( array.includes(3) ); // output: true

console.log( array.includes(15) ); // output: false


// example 2:

let letters = ["A", "B", "C", "D", "E"];

if ( letters.includes("A") ) {
    console.log("OK!");
} else {
    console.log("NO!");
}

// output: "OK!"
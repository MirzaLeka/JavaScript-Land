

// variable is equal to the return result of function7

var gimmeBack =	a => a ** 2;
	
	console.log(gimmeBack(3)); // we can use this variable to call a function



// let name = "Mirza";

// printName();

// function printName() {

//     console.log(name);

// }


// let myName;

// console.log(myName("Mirza"));

//  myName = function (name = "Amar") {
//     return name;
// }

// Lexical scoping


// let name = "Mirza";

// function myName() {
    
//     function getName() {

//         console.log(name);

//     }

//     getName();

// }

// console.log(name);
// myName();



// let name = "Mirza";

// function myName() {


//     let name = "Amar";
  
//     console.log(name);
  
// }

// myName();

// Callback

/*
function getData() {

    
console.log("   A");

setTimeout(function() {

console.log("   B");

}, 2000);

console.log("   C");


setTimeout(function() {

    console.log("   D");
    
    }, 1000);
    



}

function readDAta() {

}

getData();
*/
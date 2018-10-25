var a = 1;
(function() {
console.log(a); // will output 1 because there is a global variable up there
})();

console.log("------------------------------------");

var y = 2;
 (function() {
    console.log(y); // will print out undefined because y isn't created till next line & it exists within the same scope
    var y = 20;
})();

console.log("------------------------------------");


var z = 3;
(function() {
  z = 5;
  console.log(z); // should print out 3, but we changed 3 to 5 and that means it will print out 5
})();           

// when inside a function javascript always searches for variable within that scope
// if there isn't any, it goes to the parent scope
// if variable declared inside function, it will print out value of that variable

console.log("------------------------------------");

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3; // ** if you remove this line output will be 3 3 1, because js will grab b = 2, increment it and thus will print 3 in inner & outer ('cuz' incremented)
        console.log(b) // this will output 3
    }
    inner();
  console.log(b); // this will output 2, because there is another declared b inside inner()
}
outer();
console.log(b); // will output one because there is a bunch of b's inside


console.log("------------------------------------");

var n = 100;
function executeFirst(){
   	var n = 200
    function executeSecond(){
        n++; // looks for n in this scope. it's not there. looks outside.
        console.log(n) // prints 201, because there is n in outer scope
    }
    executeSecond();
  console.log(n); // gets incremented when it enters inside function
}
executeFirst();
console.log(n); // 100


console.log("------------------------------------");

var number = 100; // oh there is the number
function first(){
 
    function second(){
      number++; 
        console.log(number); // looks for a number; number not found. go up.
    }
    second();  // increases numer by 1 when function is called
  console.log(number);  // looks for a number; not found; go up.
}
first();   // so number is now 101, let's call first() and print it out
console.log(number);  // so that was the only number in all these functions and will also print 101


console.log("------------------------------------");

var numZ = 1;

  (() => {
    var numZ;
    console.log(numZ); // prints undefined, not because numZ is declared in this scope, but because it's not initialized with a value
  })();
  console.log(numZ); // outputs 1 because there is numZ in it's own scope

  
  // Hoisting in Javascript is a term when you have variable declared inside a function, then the variable, behind the scenes, will be moved to the top of the function

  console.log("------------------------------------");

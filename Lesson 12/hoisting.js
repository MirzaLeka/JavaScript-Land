var a = "A";
var b = "B";
var c = "C";

console.log(d); // prints undefined

var d;

// when variable is declared browser will put it on top of the file / parent scope
// in this case var d will be put on top, thus will print undefined instead of "d is not declared"

// browser hoists all declarations to the top which creates an extra space in our memory, which is a downside of hoisting
// this works for functions as well

// because function example will be hoisted to the top of the file or to the top of a scope, like function scope
// we can call example() before we even declare it

console.log( example() );

function example() {
    var agent = 47;
    return agent;
}

// this works because function above is name function
// if we want to prevent hoisting we need to create anonymous functions / expression functions

// now if we call spy anonymous function before they're declared it will throw an error

// console.log ( spy() ); // thus we'll need to call it after declaration

var spy = function() {
    var name = "Sam";
    return name;
}

console.log ( spy() ); // because it's not hoisted

// wbat happens here is we move the function expression to the top (var spy), but the initialization (rest of the function)
// stays in the same line where we created it

// so if have function inside function

(() => {

    // monkey();

    let funky = function() { // will NOT be hoisted to the top
        return 4; // can be called Only after declaration
    }

    // funky();

    function monkey() { // will be hoisted o the top
        return 5; // can be called anywhere within the same scope
    }

})();
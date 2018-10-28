
// ARROW FUNCTIONS or far arrow functions are ES6 way of function expresions

// ES5

var sum = function(a,b) {
    return a+b;
}

console.log(sum(2,3));

// ES6

var sum = (a,b) => {
    return a+b;
}

console.log(sum(4,1));

// Write less. Achieve the same.


// shorten syntax

var squared = a => a**2; 
// since we have one parameter we don't need to include the parentheses
// and since this is one line of code we don't need curly brackets, nor return keyword
// a**2 stands for Math.pow(a,2); // ES7

console.log(squared(5));


// returning an object. this requires parentheses

var user = () => ({
    user: "Mirza",
    age: 24
});

console.log(user());


// Important: Arrow functions don't bind this keyword
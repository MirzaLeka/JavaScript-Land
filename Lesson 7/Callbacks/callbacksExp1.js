
// CALLBACK FUNCTIONS

// Callback is a function that is passed as an argument to another function that receives the argument & executes that callback function
// Callbacks can be synchronous and asynchronous


// To kick things off I'll start with synchronous callbacks (code blocking)

const food = ['pie', 'fish', 'meat', 'apple'];

// for each meal we will console.log that meal
food.forEach(f => console.log(f));
// output: pie, fihs, meat, apple


// Here is another way we can do the same thing

function anotherWay(meal) {
console.log(meal);
}

food.forEach(anotherWay);
// output: pie, fihs, meat, apple


// Here is one more example of sync callbacks
// We'll create a function, pass it as a parameter of another function and call from there


// We create some random sayHello function
function sayHello() {
  console.log('Hello World!');
}

// Then we create sayYes function pass in "callback" as an argument. Name is optional. Later we call the callback() inside sayYes function.
function sayYes(callback) {
    console.log('YES');
    callback();
}

// Finally we call sayYes function and pass sayHello function as callback (it's expecting a function)
sayYes(sayHello);

// output: YES Hello World!

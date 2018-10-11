
/* setTimeout */

// program waits for time to pass to execute the function
// function only executes once

// can be called with window object

 setTimeout(bye, 3000); // calls bye function after 3 seconds
// code executes asynchronously

console.log("Hello");

// you can also clearTimeout which prevents timeout to execute

var timeoutId = setTimeout(bye, 2000);

// clearTimeout(timeoutId);

function bye() {
	console.log("Goodbye");
}



/* setInterval */

// similar, you pass function and timer
// function continues been called while waiting specified number of miliseconds between each call

// can be called with window object

var count = 0;
var intId = setInterval(counter, 1000); // name of the interval we want to clear

function counter() { // will be executed over and over after 1000ms until we call clearInterval()
	console.log(count++);
}


// summary
// setTimeout executes once and stops with clearTimeout();
// setInterval executes continously and stops with clearInterval();
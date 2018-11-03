
// Let's say we have a function expression

let sum = function(a,b) { // in this case sum is asigned to the return result of an anonymous function
    return a+b;
}

// if we call sum variable, pass values and print the result, we'll get the sum of values we passed

console.log(sum(2,3)); // output: 5


// We can also do it like this. Let's create new function

function sayHello () {
    return "Hello!"
}

// now let's create a variable and asign it to the return result of the sayHello() function

const say = sayHello(); // just like => const app = express();

// now we print the variable

console.log(say); // output: "Hello!"
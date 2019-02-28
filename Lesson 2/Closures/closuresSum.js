
// sum of numbers using Closures

function sum(num1) {
  const num2 = 5;

  return function(num3) {
    console.log( num1 + num2 + num3 );
  }
}

// if we call a function => sum(10); we'll get an inner function, because sum() returns a function
// so we asign it to a variable

const add = sum(10); // 10 refers to num1

console.log(add); // add is now an inner function. The inner function takes an argument num3 and prints the sum, so we'll pass argument

add(15); // this 15 refers to num3

// output: 30 => num1 + num2 + num3 => 10 + 5 + 15

// Again, the idea is that no one from outside can modify what's happening inside 

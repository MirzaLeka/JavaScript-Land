
// Very similar to call(), apply() passes this to a function, but uses array for the rest of parameters

function sum() { // arguments keyword will refer to all arguments that are passed in

  let sum = 0;
  console.log(this); // this is the object we are passing

  for (let i = 0; i < arguments.length; i++) { 
    sum += arguments[i]; // this will sum up all the arguments
  }
  return sum;
}

// like .call(), .apply() takes two arguments, first value of this keyword, second array
const result = sum.apply({name: 'Mirza'}, [2, 3]);

console.log(result); // output: 2 + 3

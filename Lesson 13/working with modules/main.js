const basicMath = require('./basicMath');

basicMath.add(2,3);
basicMath.subtract(basicMath.pi,1);

var {multiply, divide} = require('./advanceMath');

// to get default we need to use import keyword and give default function a name, because default keyword cannot be used
// import power, {multiply, divide} from './advanceMath';

multiply(2,3);
divide(10,2);
// when we use destructuring we no longer require filename keyword to call a method,
// because destructured variable is directly connected to a method we're calling

// when you have one function you don't need to write fileName.function to call it. Instead the following:

var print = require('./singleFunction');

print("Mirza");

// import all with * -- GETTING an error for some reason

// import * as manyModules from './manyModules';

// manyModules.one();
// manyModules.two();

// console.log(`I'm ${manyModules.age} years old`);

// Exporting variables

var {num} = require ('./variables');

console.log("Num is " + num);
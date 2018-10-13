const basicMath = require('./basicMath');

basicMath.add(2,3);
basicMath.subtract(basicMath.pi,1);

var {multiply, divide} = require('./advanceMath');

multiply(2,3);
divide(10,2);
// when we use destructuring we no longer require filename keyword to call a method,
// because destructured variable is directly connected to a method we're calling

Number.prototype.toKelvin = function() {
  return (this + 273.15); // this keyword refers to tempCelsius (25)
}

const tempCelsius = 25;

console.log(tempCelsius.toKelvin()); // output: 298.15

// By default JavaScript don't have toKelvin() method. 
// We can extend the prototype (in this case Number) by creating a new method.
// This method will be available to all variables type Number.


// String example

// Once we extend the prototype toFullName() method will be available to all variables type String, 
// just like split(), substr(), trim(), toLowerCase() and many other

String.prototype.toFullName = function() {

  // I'm creating a regular expresion to look for the user that matches the letters of each variable

  const name = this + '{1,}'; 
  const regex = new RegExp(name, 'i');

  const users = ['Bruce Wayne', 'Peter Parker', 'Tony Stark'];
  return users.find(user => user.match(regex));
}

// few letters, variables
const aaa = 'Bru';
const bbb = 'Bruce';
const ccc = 'Peter';
const ddd = 'Parker';
const eee = 'Tony';


// results
console.log( aaa.toFullName().toLowerCase() ); // output: bruce wayne
console.log( bbb.toFullName() ); // output: Bruce Wayne
console.log( ccc.toFullName().toUpperCase() ); // output: PETER PARKER
console.log( ddd.toFullName() ); // output: Peter Parker
console.log( eee.toFullName() ); // output: Tony Stark

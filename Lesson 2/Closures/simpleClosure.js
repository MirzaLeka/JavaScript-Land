
// Closure is a function that has a reference to a private variable (getName function() is a closure)

function Person(name) {
  const _name = name;

  this.getName = function() { 
    return _name; 
  }
}

const p = new Person('Mirza');
console.log( p.getName() ); // output: Mirza

// the idea behind the closure is that no one can _name is a Private variable and no one can modify it from the outside

// Person() function is a Constructor and it will be called every time new object of class Person is created
// As we se Person() is an outer function and it will execute when object is created

// getName() is an inner function, which can be called after Person() function is executed

// In other words inner function ( getName() ) has access to the elements of the outer function ( Person() ) and references the
// private (local) variable (_name) even after the execution of outer function has finished.
  // That is Closure!

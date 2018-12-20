
// in order to call function with an object, as we'd do in java, we need to use prototype keyword to asign that function to an object

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.printName = function() { // Syntax: Constructor.prototype.functionName = function() {}
    console.log(this.name);
  }
  
  var user = new Person("mike");
  user.printName();

// the reason this is useful is because we don't need to create a function inside a constructor and repeat asigning it to every object
// instead we just create it once and we use prototype to allow object access to that function

// when we click on prototype in the browser (__proto__) we'll be able to see this function (printName) listed among other functions
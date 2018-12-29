
// New Syntax of using classes
  //  This new syntax allows us to create methods with ease and reduce the need for binding events


// IMPORTANT: This might not run and here is why:
// It's always a good idea to install new plugin for this kind of features and store it into your webpack config or babelrc file
// Name: babel-plugin-transform-class-properties
// Docs: https://www.npmjs.com/package/babel-plugin-transform-class-properties


// Let's explore the new syntax by comparing the old to the new one


class oldSyntax {
    constructor() {
        this.name = 'Mirza';

        // with this we are binding this keyword for the getGreeting function, which menas we can do asign it's value to another function
        this.getGreeting = this.getGreeting.bind(this); // we need to do this fur every function we want to asign to another value
        // however if we intend to call functions with object.method we don't need to bind anything
    }

    getGreeting() {
        return 'Hello!';
    }
}

const user = new oldSyntax();
console.log(user.name); // output: Mirza
console.log(user.getGreeting()); // output: Hello!

// because we binded getGreething function in constructor we can asign it to a new variable and print it's value without any errors
const greeting = user.getGreeting(); 
console.log(greeting); // output: Hello! => just like above


// --------------------

// We won't need a constructor function

class newSyntax{

  // notice that we don't type variable type. This is the same as this.name = 'names';
  name = 'Mirza';

  // because arrow functions don't bind this keyword (they just go with the flow), we don't need to bind anything
  getGreeting = () => 'Hello';

}


// just like above with a lot less code
const user = new newSyntax();
console.log(user.name); // output: Mirza
console.log(user.getGreeting()); // output: Hello!

const newGreeting = user.getGreeting(); 
console.log(newGreeting); // output: Hello! => with a lot less code used

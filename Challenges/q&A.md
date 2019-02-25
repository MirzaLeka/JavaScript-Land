
## This file is reserved for common JavaScript interview questions

**What is JavaScript?**

JavaScript is a scripting language that allows you to implement complex things on web pages, displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.


**What is Node.js?**

Node is an asynchronous event driven JavaScript runtime built upon Chrome’s V8 JavaScript engine. It’s designed to build scalable network applications.


**What is a Pattern?**

A pattern is a reusable solution that can be applied to commonly occurring problems in software design, in this case, in writing JavaScript web applications. Another way of looking at patterns are as templates for how we solve problems, ones which can be used in quite a few different situations.


**Design patterns in JavaScript:**
* Constructor Pattern
* Module Pattern
* Revealing Module Pattern
* Singleton Pattern
* Observer Pattern
* Mediator Pattern
* Prototype Pattern
* Command Pattern
* Facade Pattern
* Factory Pattern
* Mixin Pattern
* Decorator Pattern
* Flyweight Pattern

*JavaScript MV Patterns:*
* MVC Pattern
* MVP Pattern
* MVVM Pattern

*Modern Modular JavaScript Design Patterns:*
* AMD
* CommonJS
* ES Harmony

*Design patterns in jQuery:*
* Composite Pattern
* Adapter Pattern
* Facade Pattern
* Observer Pattern
* Iterator Pattern
* Lazy Initialization Pattern
* Proxy Pattern
* Builder Pattern


**What is a Prototype?**

Javascript has an inheritance model completely different from most OOP languages. While it is object-oriented, an object doesn't have a type or a class that it gets its methods from, it has a **Prototype**. ES6 class syntax is just a *syntactic sugar*.

Prototypes are the mechanism by which JavaScript objects inherit features from one another.


**What is a _ proto _ object?**

The _ proto _ property is given to each instance (object) in JavaScript, while prototype is the
property on the constructor. _ proto _ is a property that all objects have and is used in the lookup chain to resolve methods. 


**What is a Prototype Chain?**

Every object has a prototype, including the prototype object. This *chain* goes all the way back until it reaches an object that has no prototype, usually Object's prototype.


**What is a Callback?**

Callback is any executable code that is passed as an argument to other code (function) that is expected to call back (execute) the argument at a given time. This execution may be immediate as in a *synchronous* callback, or it might happen at a later time as in an *asynchronous* callback.

A callback is a function that is to be executed after another function has finished executing, hence the name *call back*.


**What is a Promise in JavaScript?**

Promise is a javascript object that represents the eventual completion (or failure) of an asynchronous operation and it's resulting value that will be revealed at some point in time. 

A promise can be in one of three possible states: *fulfilled*, *rejected*, or *pending*.


**What is Hoisting?**

Hoisting is JavaScript's default behavior of moving declarations to the top. This kind of behavior only works for *statement* functions and variables created using *var* keyword.

Function expressions and variables declared with *let* and *const* keywords are **not** hoisted.


**Data types in JavaScript:**
* undefined
* null
* number
* string
* boolean
* object (arrays are type object)


**Let and Const vs Var**
* let and const are block scoped. var is function scoped.
* let and const are not hoisted. var is hoisted.
* same var variable can be declared multiple times within same scope. With let and const, this would cause an error. 
* const must be initialized when declared, but can't be reassigned.


**Undefined vs Null:**
Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.

Also, undefined and null are two distinct types: undefined is a type itself (**undefined**) while null is an **object**.


**Functions types:**
* Constructor function
* Generator function
* Method (function within Class)
* Async function
* Arrow function
* Immediately Invoked Function Expression (IIFE)

__These can be either:__
* function statement (declaration)
* function expression 

Key __difference__ between function expression and function statement is that expressions are **not** hoisted.

**Note**: Arrow function can only be declared as a function expression.


**What is a Closure?**

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables even when the function finishes execution. The closure has three scope chains:
* it has access to its own scope — variables defined between its curly brackets
* it has access to the outer function’s variables
* it has access to the global variables

JavaScript variables can belong to the local or global scope. Global variables can be **made** local (private) with closures.


**What is IIFE?**

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.


**What is strict equality (Identity operator) ?**

Two variables are equal ( == ) if they have the same value: ```2 == '2' // true```

The identity (===) operator behaves identically to the equality ( == ) operator except that the types must be the **same** to be considered equal: ```2 === '2' // false```, ```2 === 2 // true```.

**What is strict mode, 'use strict'?**

The purpose of "use strict" is to indicate that the code should be executed in "strict mode. The "use strict" directive was new in ECMAScript version 5. 
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

Strict mode makes several changes to normal JavaScript semantics:

* helps you to write cleaner code, like preventing you from using undeclared variables
* eliminates some JavaScript silent errors by changing them to throw errors
* fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode
* prohibits some syntax likely to be defined in future versions of ECMAScript

**What is React?**

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.


**What is Mongoose?**

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

-------------------------------------------------------------------------------------------------------------------------------

### Sources:

AddyOsmani
* [Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

Ajaymatharu
* [Undefined vs Null](https://www.ajaymatharu.com/javascript-difference-between-undefined-and-null/)

Coderwall
* [Difference between _proto_ and prototype](https://coderwall.com/p/j1khtg/javascript-difference-between-__proto__-and-prototype)

MDN
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
* [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
* [Inheritance and prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

Medium:
* [Callbacks](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
* [Closures](https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4)
* [Hoisting](https://medium.freecodecamp.org/function-hoisting-hoisting-interview-questions-b6f91dbc2be8)
* [Mongoose](https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57)
* [Node.js](https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30)
* [Promises](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
* [Prototypes](https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872)
* [Prototypes](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)

Rising Stack
* [Prototype chain inheritance](https://community.risingstack.com/javascript-prototype-chain-inheritance/)

Scotch
* [Design patterns](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

StackOverflow
* [Strict equality](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)

W3Schools
* [Closures](https://www.w3schools.com/js/js_function_closures.asp)
* [Hoisting](https://www.w3schools.com/js/js_hoisting.asp)
* [Prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)
* [Strict mode](https://www.w3schools.com/js/js_strict.asp)

Wikipedia
* [Callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* [React](https://en.wikipedia.org/wiki/React_(JavaScript_library))



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


**Types of functions:**
* Constructor function
* Generator function
* Method (function within Class)
* Async function
* Arrow function
* Immediately Invoked Function Expression (IIFE)
__These can be either:__
* function statement (declaration)
* function expression 
*Note*: Arrow function can only be declared as function expression.


**What is a Closure?**

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables. The closure has three scope chains:
* it has access to its own scope — variables defined between its curly brackets
* it has access to the outer function’s variables
* it has access to the global variables

JavaScript variables can belong to the local or global scope. Global variables can be **made** local (private) with closures.


**What is React?**

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.


**What is Mongoose?**

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.


### Sources:
* [AddyOsmani.com](https://addyosmani.com)
* [Coderwall](https://coderwall.com)
* [Medium](https://medium.com)
* [Rising Stack](https://community.risingstack.com)
* [W3Schools](https://www.w3schools.com)
* [Wikipedia](https://en.wikipedia.org)

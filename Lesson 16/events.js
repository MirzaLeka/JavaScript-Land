
// Used for events, obviously
// it's a core module so we don't need to install it

const events = require('events');

// we start by building Constructor function and we can use our own object to access event methods
let myEmitter = new events.EventEmitter();

// so when we do someEvent this function will execute
myEmitter.on('someEvent', function(msg) { // this is eqvivalent to jquery element.on('click', function(){});
    console.log(msg);
});

// now we need to call make that event happen
myEmitter.emit('someEvent', 'the event was emitted'); // name of the event, msg we want to print


// example 2: we are using another core module, util

const util = require('util');

// again we start with Constructor
let Person = function(name) {
    this.name = name;
}

// with util we can inherit event emitter
// we can say that every person object can inherit the event emitter. This is how we do it:

util.inherits(Person, events.EventEmitter); // our Constructor, thing we want to inherit
// so anything created with Person constructor will have this eventEmitter

// let's create new objects that use this constructor
let james = new Person("james"); // Person has name argument, Person(name)
let mike = new Person("mike");
let ryu = new Person("ryu");

// now we'll add all our objects into an array and give each an event 

const people = [james, mike, ryu];

people.forEach(function(person) { // for each person from people array
    
    // person.on is possible because we inhertied event emmiter for all objects with Person Constructor
    person.on('speak', function(msg) { // when each person speaks
        console.log(`${person.name} said: ${msg}`); // will log name of the person and that (msg) what they said
    });

});

james.emit('speak', 'hey dudes!'); // output: james said: hey dudes!
mike.emit('speak', 'Hello world!'); // output: mike said: Hello world!
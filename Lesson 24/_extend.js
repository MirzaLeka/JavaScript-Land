
// Extend allows us to extend properties of one object with properties of another

const _ = require ('lodash');

// Syntax: const object1 = {name: "Bruce"}; const object2 = {last: "Wayne"};

// _.extend(object1, object2) => {name "Bruce", last: "Wayne"};

// let's create new objects

const innerCar = {
    airConditioning: true,
    radio: true
}

const outerCar = {
    paint: "blue",
    lights: "neon"
}

// now let's extend previously created objects into one object

let car = _.extend(innerCar, outerCar); // first object comes first

console.log(car); // output:{ airConditioning: true, radio: true, paint: 'blue', lights: 'neon' }


// we cam extend multiple objects and sort them in which ever order we want

const engine = {
    speed: 240,
    acceleration: 100
}

car = _.extend(engine, innerCar, outerCar); // so now car object is combined with all previously created objects

console.log(car); // output: { speed: 240, acceleration: 100, airConditioning: true, radio: true, paint: 'blue', lights: 'neon' }


// alternative javascript ES6 spread operator

let newCar = {...engine, ...innerCar, ...outerCar};

console.log(newCar); // output: { speed: 240, acceleration: 100, airConditioning: true, radio: true, paint: 'blue', lights: 'neon' }
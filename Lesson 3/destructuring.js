
// DESTRUCTURING

// 1. Asign variables from objects

var user = {name: "Mirza", age: 24, love: "JS"};

/* old way */

var name = user.name;
var age = user.age;
var love = user.love;

console.log(name, age, love);

/* new way - destructuring object */

var {name, age, love} = user; // inside curly brackets (object), we specify what properties from object we want to grab and
// set it equal to object we're destructuring, in this case user

console.log(name, age, love); // note: names must be the same

// we can also grab a single property:

var {age} = user;

console.log(age);

// while destructuring we can change names of properties we're grabbing

var {name: myName, age: myAge, love: myLove} = user;

console.log(myName, myAge, myLove); // and this will give us the same output as examples above


// 2. Asign variables from nested objects

var car = {
    start: { speed: 0, acceleration: 10 },
    end: { speed: 240, acceleration: 100 }
}

/* old way */

var initialSpeed = car.start.speed;
var finalSpeed = car.end.speed;

console.log(initialSpeed, finalSpeed);

/* new way */

var { start: { speed: initialSpeed, acceleration: initialAcceleration }} = car;

console.log(initialSpeed);
console.log(initialAcceleration);


// 3. Assign variables from arrays

var arr = [1,2,3,4,5];

/* old way */

var a = arr[0]; // 1
var b = arr[1]; // 2
var e = arr[4]; // 5

console.log (a+b+e); // output: 8

/* new way */

var [a,b] = arr; // a & b are the first two elements from an array

console.log(a+b); // output: 3




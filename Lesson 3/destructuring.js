
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

// we can also access any index from an array with commas

var [a,b,,,e] = arr; // a is first, b is 2nd array element. Then we have three commas which skip 3rd and 4th element,
// followed by e, which the fifth array element

console.log(a+b+e); // => 1 + 2 + 5, ouput: 8


// 4. Using Rest operator to Reassign array elements

var [a,b, ...rest] = arr; // a & b will be the first two elements from an array. ...rest stands for the rest of the array.
// what rest in this case represents are numbers followed by a & b, which are 3, 4 and 5. rest is always the last parameter.
// rest can be called anything we like, like ...bbb

console.log(a,b); // output: 1, 2

console.log(rest); // output: [ 3, 4, 5 ] | Note: this will print an array. 
// If we want pure numbers, we can use spread operator to spread array into individual numbers

console.log(...rest); // output: 3, 4, 5


// 5. Pass an Object as a function's parameters

/* first method */

var profileUpdate = (profileData) => {
    var {name, age, nationality, location} = profileData;

    name = "Mirza"; // notice that we don't need to write var age, because we already declared it in the destructuring above
    age = 24;

}

/* second method - much more clear */ 

var profileUpdate = ({name, age, nationality}) => { // we're still passing profileData object, but right in parameter,
// we're destructuring that object into the different variables

// I purposefully did not use location property because if I don't need that property, I don't need to destructor it
// So even if I pass in entire object, function will only grab toese properies that I chose to destructor

return name + " " +  age + " " + nationality;
}


// Custom example


function Saiyan(name, age, nationality, location, superSaiyan) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.location = location;
    this.superSaiyan = superSaiyan;
}

let goku = new Saiyan("Kakarot", 40, "Vegetian", "Earth", true);
let vegeta = new Saiyan("Vegeta", 45, "Vegetian", "Earth", true);
let raditz = new Saiyan("Raditz", 50, "Vegetian", "unkwnown", false);
let nappa = new Saiyan("Nappa", 55, "Vegetian", "unkwnown", false);


let isSuperSaiyan = ({name, age, nationality, location, superSaiyan}) =>  {

    if (superSaiyan) {
       return {
           name, age, nationality, location, superSaiyan
       } // returns an object
    }
    else {
        return `${name} is not a super saiyan`;
    }

}

console.log(isSuperSaiyan(goku));

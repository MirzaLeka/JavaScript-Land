
/* Concat arrays */

var dudes = new Array("Amar", "Ermin", "Emir");
var chicks = new Array ("Amila", "Emina", "Ina");

/* Concatinating arrays without spread operator */

var people = dudes.concat(chicks); 
//this means we'll add chicks to the end of dudes array

console.log(people);

/* Join array elements into string */

var movies = new Array("The Avengers", "Batman", "Ironman", "TMNT", "Ace Ventura");

var allMovies = movies.join(" | "); // I'm using | instead of , 

console.log(allMovies);

/* Reversing arrays */

var song = ["head", "shoulders", "knees", "toes"];

console.log(song.reverse());

/* Sorting arrays */

console.log(song.sort());

/* Split elements into array */

console.log(allMovies.split(" | "));

/* Associative Arrays */

var mirza = new Array();

mirza["favColor"] = "blue";
mirza["favFood"] = "fish";
mirza["age"] = 24;
mirza["name"] = "Mirza";

console.log(`My name is ${mirza["name"]}, favorite color is ${mirza["favColor"]},
favorite food: ${mirza["favFood"]} and age is ${mirza["age"]}`);

/* Destructuring array */

    var destArr = [1,2,3];

    // before destructuring

    var xyz = destArr[0]; // outputs 1

    // now

    var [a, b] = destArr;

    console.log("Second element from array is " + b);


/* Object destructuring */

    var obj = {
        name: "Mirza",
        age: 24,
        favLng: "Javascript"
    };

    // before destructuring

    var zyx = obj.name; // outputs Mirza

    // now

    // var {name, age, favLng} = obj;

    var {favLng} = obj;

    console.log(`My favorite language is ${favLng}`);




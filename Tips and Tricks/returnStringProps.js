
// return only properties that are type string from the object below

const movies = {
  name: 'Avengers',
  releaseYear: 2012,
  director: 'Ruso Brothers',
  imdbRating: 8.1
};

// Object.values(obj) returns an array of object values of object we pass
  
// return values that are type string
const returnString = objectWePassIn => Object.values(objectWePassIn).filter(val => typeof val === 'string');

const returnValue = returnString(movies);
console.log(returnValue); // output: [ 'Avengers', 'Ruso Brothers' ]


// we'll create a function that prints a person's name and age

function getPerson(name, lastname, age) {

    console.log(`My name is ${name} ${lastname} and I am ${age} years old`);

}

// if we call a function and pass one parameter
getPerson('Sam'); // output: My name is Sam undefined and I am undefined years old


// In ES5 there was a way to handle this:

function ES5Funky (name, lastname, age) {

   // first approach  

  if (lastname === undefined) {
    lastname = 'Fisher';    
  }

  // second approach

  age = age || 40;
  // so if age is defined age would be equal age,
  // if not age will be 40

  console.log(`My name is ${name} ${lastname} and I am ${age} years old`);

}

ES5Funky('Sam'); // output: My name is Sam Fisher and I am 40 years old


// With ES6 we can give default values to function parameters

function ES6Funky(name = 'Sam', lastname = 'Fisher', age = 40) {
    console.log(`My name is ${name} ${lastname} and I am ${age} years old`);
}

// now we can call a funtion without passing any parameters and the output will be the same

ES6Funky(); // output: My name is Sam Fisher and I am 40 years old

// but if we do pass parameters, we'll override the default ones

ES5Funky('Mirza', 'Leka', 24); // output: My name is Mirza Leka and I am 24 years old

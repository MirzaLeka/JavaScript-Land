
// call methods allows us to call a function and then pass extra value for this keyword

function printName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
    console.log(this); // with the call() method we can change the binding of this keyword
}

// now we'll call the method and add .call() with the value of this keyword
printName.call({ // inside is the object that will represent this keyword
  job: 'Closer',
  series: 'Suits'
}, 'Harvey', 'Specter');

// the first argument is an object that will be retrieved by the this keyword ( log(this) )
// the second argument refers to a firstName argument in printName function
// and the final argument refers to secondName argument in the same function


// Alternative: bind() 

/*
const printNameV2 = printName.bind({
  job: 'Closer',
  series: 'Suits'
}, 'Harvey', 'Specter');

printNameV2(); */

// As we see call() replaces these two statements with one
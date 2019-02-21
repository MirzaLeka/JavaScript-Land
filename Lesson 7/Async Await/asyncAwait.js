
// Rule 1: await can only be used in an async function.
// Let's create a function that returns a promise and then we'll use await to handle that promise

// this will be just a regular function
const getAge = (age) => {

  return new Promise((resolve, reject) => {

    if (age >= 18) {
        resolve('enjoy the ride!');
      } else {
        reject("you're not old enough to drive.")  
      }

  });

}

// instead of calling getAge() and .then() here we'll create another function inside which we'll execute getAge()
// for now let's roll with promises and then we'll switch to async await
const getUser = (name) => {
  // this function return getAge() function which as we know returns a Promise. This means we can attach .then() & . catch() to it
  return getAge(24)
          .then(msg => `${name}, ${msg}`) // this then() and catch() are related to getAge(). 
          .catch(err => `${name}, ${err}`); // for getUser() we add those below getUser() function
}

// now we'll call getUser() function, pass a value and get a returned result
getUser('Mirza')
.then(msg => console.log(msg)) // because age is above 18 our output will be =>  Mirza, enjoy the ride!
.catch(err => console.log(err)); // but if we set age below what we'll get is => Mirza, you're not old enough to drive.


// Now let's try the same example using async and await
// getAge() function will be exacty the same. What we are going to do is tweak getUser() function and make it async.
// Let's call it getProfile() form now on to avoid the confusion


// Rule 2: in order to use await function must be async

// Rule 3: what await means is we wait for request to finish and then and only then we execute the next line of code
  // Code is still asynchronous, but works and looks like synchronous code
  
// Rule 4: if we are returning something we can just type variable = await functionName(). 
  // If we are not returning anything we can just type await without asigning returned value to variable

// Rule 5: to catch errors we wrap our async call wih try and catch block

const getProfile = async (profile) => {

  try {
    const age = await getAge(24); // we are returning either resolve() or reject() from getAge
    return `${profile}, ${age}`;  // we are returning a message + resolve or reject
  }  
  catch (e) {
    throw new Error(e); // Value of e is a value of reject() inside getAge() function
  }
}

// Rule 6: We call the function just as we would cass if there was a promise isnide and attach .then() and .catch()

getProfile('Ermin')
.then(msg => console.log(msg)) // output: Ermin, enjoy the ride!
.catch(err => console.log(err)); // output: you're not old enough to drive.

// In the end we get much shorter and much cleaner code, especially if we had multiple promises to handle

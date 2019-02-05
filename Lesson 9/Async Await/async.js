
// let's look at normal javascript function for a second
function getName() {
  return 'Homer';
}

// if we call this function we'll get the return result
console.log(getName()); // output: Homer


// now let's look at async function
async function getAge() {
  return 40;
} 

// unlike normal function, async function ALWAYS returns a Promise that is resolved
console.log(getAge()); // output: Promise { 40 }

// this means that after we call a function we can attach a .then() to print age
getAge().then(age => console.log(age) ); // output: 40

// async function is the same as having a function that returns a Promise that is resolved
function getBall() {
  return Promise.resolve('Ball out!');
}

getBall()
.then(msg => console.log(msg)); // output: Ball out!


// but what about errors? if there is any error we can attach .catch() call. Let's add an error of our own
async function getEmail() {
    throw new Error('This is an error!'); // this is where we reject()
    return 'user@email.com';
}

// because of throw we'll trigger a catch() call and then() will never be executed
getEmail()
.then(email => console.log(email))
.catch((err) => console.log(err)); // output: Something went wrong


// Async as function expression 
const getReady = async () => {
    return "I'm ready for Async Await!";
}

getReady()
.then(msg => console.log(msg)) // output: I'm ready for Async Await!
.catch((err) => console.log(err)); // because everything is OK this will never be called

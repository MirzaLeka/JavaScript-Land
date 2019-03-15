
// original example

function originalDisplay(payload) {

  if (payload.loading) { 
    return console.log('Loading...');
  }
  if (payload.error) {
    return console.log(payload.error.message);
  }

  console.log(`Hey ${payload.data.name}`);

}

// we pass data in an object named payload (argument payload)
originalDisplay({loading: 'abc'}); // output: 'Loading...'

// the Problem here is that we can only have one argument at the time. 
  // if we had 3 different arguments like (loading, error, data), then to execute data the other 2 would have to be NULL
  // and we have to write payload all the time, because it's an object

// Solution: take a payload object an Destructure all of it's arguments

// we can destructure arguments we pass to the function which is also known as named params

function display({error, loading, data}) { // Order doesn't matter. These are properties on object (Payload)

  if (loading) { 
    return console.log('Loading...');
  }
  if (error) {
    return console.log(error.message);
  }

  console.log(`Hey ${data.name}`);

}

// the idea is that we just need one function and whatever we pass in as argument it will work, 
// which wouldn't if we had all 3 normal arguments (parameters)

display({loading: '......'}); // output: Loading...
display({error: {message: 'Named Params are awesome!'}}); // output: Named Params are awesome!
display({data: {name: 'Mirza'}}); // output: Hey Mirza

// if we pass data, name into object we'll execute data up above
// if we pass error, message we'll execute errog.message

// If we include multiple keys nothing will fail. What will log is Loading... simply because it's first inside display() function
display({data: {name: 'Arrow'}, loading: 'BBB'});


// We can do the same thing for arrays

function sayHiOriginal(parts) {
  console.log(`Hello my name is ${parts[0]} and I am ${parts[1]} years old.`);
}

sayHiOriginal(['Mirza', 24]); // output: Hello my name is Mirza and I am 24 years old.


// Instead of writing parts[0], parts[1]... parts[n] we can just use destructuring to pick up items we want and use them as variables

function sayHi([name, age]) { 
  console.log(`Hello my name is ${name} and I am ${age} years old.`);
}

// and we can n elements in the array and it will work becase we are are destructuring the first two:
sayHi(['Mirza', 24, 123456 ]); // output: Hello my name is Mirza and I am 24 years old.

// but unlike objects where we have keys (named properties) and we can pick up properties by name,
  // with arrays the order Matters.

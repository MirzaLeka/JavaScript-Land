
// we can destructure arguments we pass to the function which is also known as named params

function display({error, loading, data}) { // order doesn't matter. these are properties on object

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
// if we pass error, message we'll execute payload.error

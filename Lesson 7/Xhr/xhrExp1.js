
// AJAX the Xhttp way (old way)

// Method 1: State changes

// we start by creatuing new instance of XMLHttpRequest

var xhr = new XMLHttpRequest; // state 0

// then we use .open() method that sets everything for us
// first oparameter in .open() will be type of request 
// second parameter is API uri
// third parameter is a boolean. If true, operation will be async, if false, code will be synchronous

xhr.open('GET', 'data/tweets.json', true); // state 1

// now we need to listen to state changes and what we do I say if state change is 4 and everything is OK (200) send data
// this function will execute every time state gets changed
xhr.onreadystatechange = function() {

  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(JSON.parse(xhr.response)); // we need to parse our stringified object to JS object
    // xhr.response is the response we are getting from *data/tweets.json*
  }  else if (xhr.status = 404) { // checking for errors
    console.log(xhr.statusText); 
  }

}

// now we use .send() metod do tell javascript to grab the data, send the data and so on

xhr.send(); // state 2


// READY STATES

// 0 - request not initialized
// 1 - request has been set up
// 2 - request has been sent
// 3 - request is in process
// 4 - request is complete


// Method 2: onload

// setup is pretty much the same

var xhr = new XMLHttpRequest;

xhr.open('GET', 'data/tweets.json', true);

// now we use onload function to get response text
xhr.onload = function() {
  if (xhr.status == 200) { // now we can use data we received in the dom and console
     console.log(xhr.responseText); 
  }
}

// and this is how we handle errors
xhr.onerror = function() {
  console.log(xhr.statusText); 
}

xhr.send();

// And that's it!

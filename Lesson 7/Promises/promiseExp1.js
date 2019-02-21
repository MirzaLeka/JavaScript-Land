
// Promise is a javascript object that represents a function that hasn't finished yet, but will be at some point in time.
// So it's asynchronous operation that works with callbacks. 

// While we are waiting, the Promise is Pending. Once it's finished, promise can either be Resolved (completed) or Rejected (failed). 

// In comparison to callbacks, promises are easier to maintain. We write less code and it's easier to handle error.

// Since Promise works for async code, we can attach .then() method to every async operation. 
// That means once the operation is finished, data is fetched/deleted/posted then => do this, do something
// But if data failed and promise was rejected, we'll have .catch() method that will hold all errors for us

// It's worth mentioning that Promise can either be resolved or rejected. Can't be both completed and failed.


// Example 1: Clean house
// - we make a promise that we'll clean it sometimes in the future
// - if that does happen promise will be resolved, else it will be rejected


// This is the part where the logic will go and in the next part will handle the output => use .then or .catch
const promiseToCleanHouse = new Promise(function(resolve, reject) {

  if (true) {
    resolve('clean'); // if house s cleaned we call resolve  
  } else {
    reject('still dirty'); // if it's not clean we call reject
  }

});

// Now in second part we'll write our then calls => what happens after data is fetched, after promise was resolved or rjected

// promiseToCleanHouse is an instance of a promise, which means it's async operation, which also means we can attach a then call to it

promiseToCleanHouse.then(function(fromResolve) { // if everything goes well
  console.log('The house is now ' + fromResolve ); // Optional message/argument
}).catch(function(fromReject) {
  console.log('The house is' + fromReject); // if promise is rejected
});

// And that is Javascript Promise

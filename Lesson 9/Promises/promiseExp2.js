
// Let's say we have a sequence of asnyc operations, like for example:
// once we POST new contact, then we'll GET all contacts, then will UPDATE xy contanct, 
// which menas we'll have sequnce of operations. That can be callback, after callback, after callback, but will we'll be doing is using Promises.

// We can also create function expressions that return a promise 

// Example: Complete a task to win an ice cream
// So in order to win ice cream you need to first clean the room and then remove garabage

const cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned the room'); // this is where the logic comes. We'll just put resolve to write less code! 
  });
}

const removeGarbage = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + ' removed garbage'); // we'll pop a little message
  });
};

const winIceCream = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + ' won ice cream'); // we are so good at this that we resolved everything!
  })
}

// Now comes the second part where we handle all these requests in which ever order we like.
// No need to catch any errors because we resolved everything XD

// unlike previous example where we had instance of a promise, now we have 3 functions
cleanRoom().then(function(result) { // result is a message we are passing above
  return removeGarbage(result); // since removeGarbage function returns a promise, then this line returns a new promise and we can use .then()
}).then((result) => winIceCream(result) // we can use arrow syntax to do this faster
).then(result => console.log('finished ' + result) // output: finished Clean the room removed garbage win ce cream => result was concatinated and we had 3 results
);

// of course we can use both function keyword and arrow function

// And that was sequence of promises. It's much easier to maintain and much easier to read than sequence of callbacks


// Again if we have sequence of async operations we can use Promise.all and Promise.race
// We use these to functions when we don't care about what happens when once promise is fulfilled. Instead we execute something when all of them are finished.

const cleanRoom = function() {
    return new Promise(function(resolve, reject) {
      resolve('Cleaned the room'); 
    });
  }
  
  const removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
      resolve(message + ' removed garbage'); 
    });
  };
  
  const winIceCream = (message) => {
    return new Promise((resolve, reject) => {
      resolve(message + ' won ice cream'); 
    })
  }

// We put all our functions inside array
  Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(() => { // when all of these are resolved we call then
    console.log('All done!');
  });


  // We can also use Promise.race()
  // This will execute when at least one of the promises in array is finished

  Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(() => { 
    console.log('At least one is done!');
   });

  // Race can be useful when we are pulling something data from the server.
  // We only want to know if one data was pulled

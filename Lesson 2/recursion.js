
// Recursive funciton is a function which calls itself till certain criteria is matached

const recurse = (num) => {
  
  if (num === 0) return 0; // function will stop when num === 0

  return num + recurse(num - 1); // we are subtracting one each time we call a function
};

console.log(recurse(10)); // output: 55 => 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1


// What's going on behind the scenes?

/*
const behindTheScenes = (num = 3) => { 
  return 3 + function (2) {     total number + (total number -1)
      return 2 + function(1) {      total number + (total number -1) + (total number -2)
          return 1 + function(0) {      total number + (total number -1) + (total number -2) + (total number - total number)
              return 0;
          }
      }
  }
};

behindTheScenes(3); // output => 3 + 2 + 1 => 6
*/

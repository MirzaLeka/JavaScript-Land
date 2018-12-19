
// Recursive funciton is a function which calls itself till certain criteria is matached

const recurse = (num) => {
  
  if (num === 0) {
    return 0;
  }
  return num + recurse(num - 1);
};

console.log(recurse(10));


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

behindTheScenes(3);
*/

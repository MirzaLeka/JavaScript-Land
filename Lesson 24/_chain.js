
// In Lodash we can chain methods

const _ = require('lodash');

let arr = _([1,3,2,5,4])
.sortBy(arr => arr) // we need function here because arr is not defined
.map(x => x + '')  // after sorting we'll concat all array elements into strings
.value(); // we applied value of the chain to arr variable

console.log(arr); // output: [ '1', '2', '3', '4', '5' ]


// although previous code is ok, we imported entire lodash library to use only 3 options
  // what we should do is only import methods we need

  const flow = require('lodash/fp/flow');
  const sortBy = require('lodash/fp/sortBy');
  const map = require('lodash/fp/map');
  
  // fp stands for functional programming
  // now we'll replace chain pattern with flow()
  
  const fp = flow(
  sortBy(x => x),
  map(x => x + '')
  )([1,3,2,5,4]); // syntax is quite similar
  
  console.log(fp); // output: [ '1', '2', '3', '4', '5' ] // we get the same result




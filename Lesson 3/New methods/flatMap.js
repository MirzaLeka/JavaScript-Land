
// flatMap is flat() and map() in one

// let's see map first
let res = [1, 2, 3, 4].map(x => [ x, x*2 ]);

// what we'll get is a nested array
console.log(res); // output: [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ] ]

// Now let's look at same example using flatMap()

res = [1, 2, 3, 4].flatMap(x => [ x, x*2 ]);

console.log(res); // output: [1, 2, 2, 4, 3, 6, 4, 8]

// It's important to mention that flatMap only flats one level, so if we had multiple nested arrays, we would still have nesting

res = [1, 2, 3, 4].flatMap(x => [[x * 2]]);

console.log(res); // output:  [[2], [4], [6], [8]]


// For in loop

let arr = [1,2,3,4,5]; 

for (let a in arr) {
    // console.log(a); // outputs indexes
}

for (let a of arr) {
    // console.log(a); // outputs values
}

// example 2: adding elment to an array

arr.foo = "bar";
 
for (let a in arr) {
    console.log(a); // outputs indexes
}

for (let a of arr) {
    console.log(a); // outputs values
}

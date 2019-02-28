
// For in loop

let arr = [1,2,3,4,5]; 

for (let a in arr) {
    // console.log(a); // outputs indexes as Strings
}

for (let a of arr) {
    // console.log(a); // outputs values
}

// example 2: adding elment to an array

arr.foo = "bar";
 
for (let a in arr) {
    console.log(a); // outputs indexes and foo
}

for (let a of arr) {
    console.log(a); // outputs values, but not bar
}

// for in loops through enumerable properties while for of loops through iterable objects


// example 3: HTML Collection. Once we grab html elements what we'll get is a collection of HTML elements.

const listElements = document.getElementsByName('li');

// we don't need to conert it into Array using Array.from(variable). We can use for in loop to loop through the collection, just as we would through array

// now we can add (for example) event listen foreach list itemm in listElements collection
for (let li in listElements) {
   
  li.addEventListener('click', function() {
      li.style.color = 'red';
  });
    
}

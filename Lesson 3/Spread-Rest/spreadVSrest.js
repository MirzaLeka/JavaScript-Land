
// Let's look at small example where we'll compare Spread and Rest operator 

const numbers = [5, 10, 15];

function sum (a,b,c) {

    console.log(a + b + c); // 5 + 10 + 15

}

// instead of passing entire array with spread we can spread each array element into individul element

sum(...numbers);  // output: 30


// now let's look at rest

function SUM (...nums) {

   const sum = nums.reduce((prev, current) => prev + current); 
   console.log(sum); // 5 + 10 + 15

}

// with rest we can call a function and pass numbers directly, which will then be spreaded into individual elements in parameter of a function

SUM(5, 10, 15); // output: 30

// now instead of hard-coding we can spread array elements and we would get the same result as with the first sum function

SUM(...numbers); // output: 30


// How was this handled in ES5?

// Well in ES5 we had conext methods like call and apply. They both serve as a binding of this keyword,
// but we can pass null as a first parameter because there is no object in this example

// apply takes array as a second argument

function sumAgain (a, b, c) {
  console.log( a + b + c );
}

sumAgain.apply(null, numbers); // output: 30

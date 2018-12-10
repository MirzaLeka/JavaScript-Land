
// Imagine you are given an array with a task to print all elements from array as html tags

const arr = ['first', 'second', 'third'];


// Most examples you find will look like this. This is a bad practice

let tags = '';
for(let i = 0; i < arr.length; i++) {
tags+= `<li>${arr[i]}</li>`;
}
console.log(tags);

console.log('..............................');


// Here's a better practice of doing the same, but still not good enough

let tagsAgain = '';
arr.forEach(tag => tagsAgain += `<li>${tag}</li>`);
console.log(tagsAgain);

console.log('..............................');


// Now we come to the best practice using maps

console.log(arr.map(tag => `<li>${tag}</li>`).join(''));

// array.map function returns an array
// that's why we use join() to join the return result into string with no space in between ('')
// finally, we can store it the final result in a variable or we can print it right away

// output for all three is: <li>first</li><li>second</li><li>third</li> 


// Credits: Github user: whitelionx

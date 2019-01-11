
// Fetch is native to JS. Came with ES6

// GET method

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(res2 => console.log(res2.data))
.catch(err => console.log(err));


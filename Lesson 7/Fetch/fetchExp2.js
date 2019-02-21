
// Fetch is native to JS. Came with ES6, but it's not supported by node. So we install node-fetch

const fetch = require("node-fetch");

// GET method

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json()) // first we convert this promise into proper json object we work with
.then(data => console.log(data)) // then we output the data
.catch(err => console.log(err)); // or we output the rror


// POST method

const postData = {
  title: 'new title',
  body: 'some body'
}

fetch('https://jsonplaceholder.typicode.com/posts', { // we don't need this object for GET method
  method: 'POST',
  headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
  },
  body: JSON.stringify(postData) // we have to stringify data we are sending to the servers
})
.then(res => res.json()) 
.then((data) => console.log('Posting new data', data))
.catch(err => console.log(err));


// PUT METHOD

const putData = {
    id: 96,
    title: 'Brand New Title'
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PUT',
    headers: {
        'Accept': 'application/json'
    },
    credentials: 'same-origin', // you need to add this line
    body: JSON.stringify(putData),
})
.then(res => res.json())
.then(data => console.log('Data is updated ', data));


const axios = require ('axios'); // third party module

// very similar to fetch, but we just write less code


// GET method

axios.get('https://jsonplaceholder.typicode.com/posts') // this retunrs a promise so we can use .then()
.then(res => console.log(res.data)); // outputs posts
// res gives us everything
// res.data gives us array of posts


// POST

axios.post('https://jsonplaceholder.typicode.com/posts', {
  userId: 482,
  id: 286,
  title: 'some title',
  body: 'some body'
}).then(res => console.log('Posted new data', res.data))
.catch(err => console.log('Error was ', err));


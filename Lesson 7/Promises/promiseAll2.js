
// Three promises

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Good bye!');
});

const promise4 = fetch('jsonplaceholder.typicode.com/users')
.then(res => res.json()); 
// no need to use .then() again to console.log data. We are doing that in Promise.all with values

// Promise all
Promise.all([promise1, promise2, promise3]).then( values => console.log(values) );

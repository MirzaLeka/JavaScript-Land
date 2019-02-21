
const fetch = require('node-fetch'); // we need to install this to use fetch within nodeJS


const request = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/A');
  const json = await response.json();
  console.log(json);
}

request();

/* How to Fetch? 
  1. function must be async --> const request = async() => {} 
  2. we wait for the request to finish (await) and then asign the response to a variable (const response)
  3. we wait for a Promise to resolve to a value (response.json()) and asign the data we get to a new variable
  4. we use the data
*/

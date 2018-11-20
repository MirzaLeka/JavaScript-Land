
const express = require('express');

const app = express();
const port = 8000;

// MIDDLEWARE is a piece of code between request and the response
/* Common middlewares:
- body parser
- cookie parser
- custom made middlewares
- built in middlewares */

// we can use app.use to use log middleware
app.use(log); // will be passed throughtout file whether it's user or not
// and will print the output of log function again

app.get('/', log, hello, function(req, res) {
  console.log('Route with middlewares');
  // However we can't send a new request, like res.send("Hey!"), because we closed response with res.end
  // in hello function
});

// Lucky for us, JS uses hoisting so we can pass in these two middleware functions in the app.get above

function log(req, res, next) {
  console.log(new Date(), req.method, req.url); // current date, http method, request URL
  next();
}

function hello(req, res, next) {
  res.write('Hello World'); // writes Hello World on the screen
  res.end(); // ends response. Note: if we use res.send we don't need res.end
  next(); 
  // because hello is not last in the chain => "log, hello, function (req, res)" <= if we 
  // comment out the next() we will not get that console.log('Route with middlewares');
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Outputs when you go to / route

// Output on the page: "Hello World"

// Output in the console: 
/* 
Server started on port 8000
2018-11-04T18:25:37.952Z 'GET' '/'
Route with middlewares
*/

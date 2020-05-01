const http = require('http');

const req = http.request(
  { hostname: 'www.google.com', method: 'GET' }, // get is default
  (res) => {
    console.log(res.statusCode); // prints status code
    console.log(res.headers); // prints headers

    // this will fire if any data comes back
    res.on('data', data => {
      console.log(data.toString());
    });
  }
)

// if something goes wrong
req.on('error', (e) => console.log(e));

// end request
req.end();

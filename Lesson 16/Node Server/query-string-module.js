// The querystring module provides utilities for parsing and formatting URL query strings

const querystring = require('querystring');

const user = {
  name: 'mirza l',
  website: 'www.google.com'
};

// we use stringify to convert object to query string

const stringified = querystring.stringify(user);
console.log(stringified); // output: name=mirza%20l&website=www.google.com

// we can reverse string back to object by using parse method

const parsed = querystring.parse(stringified); // output: { name: 'mirza l', website: 'www.google.com' }
console.log(parsed); 

// we can decode uri on query string

const decoded = querystring.decode(stringified);
console.log(decoded); // output: { name: 'mirza l', website: 'www.google.com' }

// and encode using encode method

const encoded = querystring.encode(decoded);
console.log(encoded); // output: name=mirza%20l&website=www.google.com
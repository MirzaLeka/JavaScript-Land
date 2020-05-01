// The url module provides utilities for URL resolution and parsing

const url = require('url');

let output = url.parse('http://google.com/search?q=hello%20world');

console.log(output);

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'google.com',
  port: null,
  hostname: 'google.com',
  hash: null,
  search: '?q=hello%20world',
  query: 'q=hello%20world',
  pathname: '/search',
  path: '/search?q=hello%20world',
  href: 'http://google.com/search?q=hello%20world'
}
*/

// to parse query property we can add true as a second param

output2 = url.parse('http://google.com/search?q=hello%20world', true);

console.log(output2);

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'google.com',
  port: null,
  hostname: 'google.com',
  hash: null,
  search: '?q=hello%20world',
  query: [Object: null prototype] { q: 'hello world' },
  pathname: '/search',
  path: '/search?q=hello%20world',
  href: 'http://google.com/search?q=hello%20world'
}
*/

// to format query into a string we use url.format

const format = url.format(output);

console.log(format);

// output: http://google.com/search?q=hello%20world
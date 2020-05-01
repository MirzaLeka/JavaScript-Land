// DNS module is used to translate network name to address and vice versa
const dns = require('dns');

// this is async
dns.lookup('github.com', (err, address) => {
  console.log(address); // output: 140.82.118.3
});

// resolve 4 ip address
dns.resolve4('github.com', (err, address) => {
  // returns array of A ip adresses
    console.log(address); // output: [ '140.82.118.3' ]
});
  
// alternative to above
dns.resolve('github.com', 'A', (err, address) => {
  console.log(address);
});
  
// return MX address
dns.resolve('github.com', 'MX', (err, address) => {
  console.log(address);
 // output:
 /*
 [
  { exchange: 'alt2.aspmx.l.google.com', priority: 5 },
  { exchange: 'alt4.aspmx.l.google.com', priority: 10 },
  { exchange: 'alt1.aspmx.l.google.com', priority: 5 },
  { exchange: 'alt3.aspmx.l.google.com', priority: 10 },
  { exchange: 'aspmx.l.google.com', priority: 1 }
]
  */
});

// dns.resolveMx() - altrnative to method above

// reverse translates ip back to hostname
dns.reverse('140.82.118.3', (err, hostname) => {
  console.log(hostname); // [ 'lb-140-82-118-3-ams.github.com' ]
});
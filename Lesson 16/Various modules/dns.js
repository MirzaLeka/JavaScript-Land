const dns = require('dns');

const website = 'https://www.google.com/';

dns.resolve(website, (err, addresses, family) => {
  if (err) {
    console.log(err);
  }

  console.log('addresses :>> ', addresses);
  console.log('ip family :>> ip', family);
});

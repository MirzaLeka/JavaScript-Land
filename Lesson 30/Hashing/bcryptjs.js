
const bcrypt = require('bcryptjs');

// Bcryptjs is used for hashing passwords 

// To hash a password with need a plain text password and a salt. Salt reperesents a series of random values that are placed on hash.

const password = 'mypass!';
let hashed = '';

// to hash we use getSalt method
bcrypt.genSalt(10, (err, salt) => { // 10 is a number of random values we want. The greater the number, the longer hashing will take
  // once we generated salt we call hash() method and pass salt and password we want to hash-
  // since salt is generated on it's own we don't just need to type in salt. Don't need to update it manually

  bcrypt.hash(password, salt, (err, hash) => {
   
    if (err) console.log( err );
    console.log(hash); // this will be our hashed password
    hashed = hash;

  });
});

// because bcrypt.compare() will run sooner than bcrypt.genSalt() and hash() I pulled hashed value out so I can make a comparison without running into errors
hashed = '$2a$10$JYFPvYnh93pkayRRX1mLjuJeTz9.Q1aCKDm7xXGWVVNJdVMXPgSkC';

// to compare hashed password and original password we use method compare()
bcrypt.compare(password, hashed, (err, result) => {
  
    if (err) console.log( err );
    // compare verifies the password. if hashed password matches original result will be true. Else it will be false.
    console.log(result); // output: true
});



// There are also sync versions of these functions. You can learn more here:
// https://www.npmjs.com/package/bcryptjs


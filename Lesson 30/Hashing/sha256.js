
const { SHA256 } = require('crypto-js'); // SHA256 function is stored in crypto-js package

// Syntax: const hash = SHA256(value). 
// SHA256 returns and object

const original = "It's a bitterly cold night outside";
const hash = SHA256(original).toString(); // we are hashing message above, converting it to String and storing it in a variable hash

console.log('Original: ', original); // output: Original:  It's a bitterly cold night outside
console.log('Hashed: ', hash); // output: Hashed:  41d5efd6a4d322fe6cebc0ce1f855b3a1b699d0c8f4f2920c34deea2b336b485


// Hashing is a one way algorith. Meaning if we hash a value we'll get the result, but we can't convert the result into an original value
// Hash value of original variable will always be the same


// Salting: 

const data = {
    id: 5
};

const token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'someSecret').toString() // this data is refering to data with id: 5
};

// If some hacker finds the correct value, hashes it, he will have correct value of our hash and thus be able to access our system.
// For that reason we are adding a secret at the end of the hash. So even if someone cracks the code, they don't know secret and won't be able to get in.
// This process is called Salting the hash.

const resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();

// now we can check if result hash is the same as token.hash up above
if (resultHash === token.hash) {
    console.log('Data was not changed.');
} else {
    console.log('Data was changed. Do not trust!');
}

// if we exclude 'someSecret', that is hidden in our program, condition will fail and else statement will be executed

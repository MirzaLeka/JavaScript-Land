
// keys, values and entries

const user = {
    name: "Mirza",
    age: 24,
    job: "Developer"
};


// ES5 - Object keys => returns an array of all keys of desired object

const keys = Object.keys(user);

console.log(keys); // output: [ 'name', 'age', 'job' ]


// ES7 - Object values =>  returns an array of all values of desired object

const values = Object.values(user); 

console.log(values); // output: [ 'Mirza', 24, 'Developer' ]


// ES7 - Object entries =>  returns a nested array of both keys and values and puts each key value pair into it's own array

const entries = Object.entries(user);

console.log(entries); // output: [ [ 'name', 'Mirza' ], [ 'age', 24 ], [ 'job', 'Developer' ] ]


// to return only a first entry we can do the following:

const firstEntry = Object.entries(user)[0];

console.log(firstEntry); // output: [ 'name', 'Mirza' ]


// convert object into a map

const map = new Map( Object.entries(user) ); // this can't be done with Object.keys() or Object.values()

console.log(map); // output: Map { 'name' => 'Mirza', 'age' => 24, 'job' => 'Developer' }


// iterate over object => prints all keys and values 

Object.entries(user).forEach( ([key, value]) => {
    console.log(`${key} : ${value}`);
});

// output: entire object
/* 
name : Mirza
age : 24
job : Developer
 */


// ES10 - Object.fromEntries() => we can get an original object based on it's entries

// we have const entries declared above so I'll use that (const entries = Object.entries(user))
const originalObject = Object.formEntries(entries);

console.log(originalObject); // output: {name: "Mirza", age: 24, job: "Developer"}

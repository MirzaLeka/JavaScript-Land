let add = (a,b) => {
    console.log(a+b);
};

let subtract = function(a,b) {
    console.log(a-b);
}

let pi = 3.14; // exporting variable

// module.exports.pi = pi; 

module.exports = {add, subtract, pi};

// this is like
// module.exports.add = add; // custom name vs funciton name

// or module.exports = {add: add} with ES5

// take this function into a count

function sum (a,b) {
  console.log(a+b);
}

// if we call a function and pass 2 parameters, we'll expect a result
sum(1,2); // output: 1 + 2 = 3

// if we call the same function and add more than 2 parameters, we'd expect a sum of all elements
sum(1,2,3,4); // output: 3
// but that's not the case. we only get sum of first two arguments as a sum.


// so how can we sum up all the values we pass? First choice would is to use arguments keyword available to all JS functions

// arguments is not an array of parameters we pass. It's actually an object that contains the parameters we pass in as an array

// so in other to use array methods, we need to transform arguments into an array

function Sum (a,b) {

    // switch arguments into array
    const args = Array.prototype.slice.call(arguments);

    // now args should be an array
    console.log(args instanceof Array); // output: true => so it is an array

    // now we can create a sum in number of ways. Here are a couple:

        // 1: hard-coded way

        console.log(a + b + args[2] + args[3]); // output: 10

        // 2: more elegant approach

        let sum = 0;
        for (let i = 0; i < args.length; i++) {
          sum += args[i]    
        }

        console.log(sum); // output: 10

        // 3: the best way

        const SUM = args.reduce((prev, current) => prev + current);
        console.log(SUM); // output: 10

}

Sum(1, 2, 3, 4);


// So why use rest parameter? Why not stick with arguments? 

// Well arguments won't work with Arrow functions. 
// Typing > Array.prototype.call(arguments) < all the time is pointless, especially when you have ...AndCustomKeyWord (REST)


// It's to present the rest parameter. It looks just like spread with it's 3 dots and name can be anything, but people call it rest

function SUM (a, b, ...rest) {

    // unlike arguments, rest doesn't represent all parameters we pass in, but rather, only those that come after a,b
    // so in this case we'll have an array of 2 arguments for values 3 & 4

    // also rest is an array

    // Now let's sum things up in number of ways:

        // 1: hard-coded way

        console.log( a + b + rest[0] + rest[1] ); // output: 10

        // 2: reduce way

        const sum = rest.reduce((prev, current) => prev + current) + a + b;
        console.log(sum); // output: 10

}

SUM(1, 2, 3, 4);


// Another example of rest is to print all family members who have different names but share the same lastname

// lastname will be the first parameter. The rest of the parameters will be array members of names (rest parameter)
const family = (lastname, ...names) => {
    
    // so for each name in names array we'll print out name of the person and their lastname (which is the same for everyone)
    names.forEach(name => {
        console.log(`${name} ${lastname}`);
    });

}

family('Smith', 'John', 'Ali', 'Will', 'Jacob');

/* Output:
John Smith
Ali Smith
Will Smith
Jacob Smith
*/

// REST Parameter MUST be the last element in brackets and in can have any number of arguments

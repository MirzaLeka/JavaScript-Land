
// Challenges, interview questions and exams


// && and ||

console.log(1 || 2); // output: 1. Whenever you use || js chooses the first value

console.log(1 && 2); // output: 2. Whenever you use && js chooses the last value

console.log(1 || 2 || 3); // output: 1. Again js chooses first value

console.log(1 && 2 && 3); // output: 3. JS chooses last value when using &&

console.log(1 || 2 && 3); // output: 1

console.log( 1 && 2 || 3); // output: 2

console.log("-------------------");

// < and > 

console.log(1 < 2); // output: true

console.log(1 > 2); // output: false

console.log(1 < 2 < 3); // output: true  (1)

console.log(3 > 2 > 1); // output: false (2)

// (1) case we have 1 < 2, which returns true. Now we have true < 3. 
// Since true == 1, equation will look like this 1 < 3, which is true again, thus output is true.

// (2) case we have 3 > 2, which returns true. Next we have true > 1. Like mentioned above true == 1.
// That means our equation is now true > 1.This is false, because true == 1 and 1 is not greater than 1.
// Thus 3 > 2 > 1 or simply 1 > 1 returns false

console.log("-------------------");

// == and ===

console.log(2 == '2'); // output: true. Value is the same, but type is different

console.log(2 === '2'); // output: false. On one side we have number, on the other string.

console.log(1 == true); // output: true. 0 and 1. 0 stands for false, 1 stands for true.

console.log(1 === true); // output: false. Value is the same, but type is different

console.log("-------------------");

// true and false

console.log(!true); // output: false

console.log(!!true); // output: true

console.log(true || false); // output: true. It can eiter be true or false, so javascript chooses true

console.log(true && false); // output: false. It's true and it's false, so javascript chooses false

console.log(true || false || true); // output: true. First true or false returns true, then we have true or true, which is true

console.log(true && false && true); // output: false. true and false returns false and then false and true also returns false
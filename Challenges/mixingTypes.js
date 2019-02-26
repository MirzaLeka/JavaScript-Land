
// Saw this in one of JS quizes, so I decided to test it out

Boolean(false); // output: false
Boolean(true); // output: true

String(true); // output: "true"

Number(true); // output: 1
Number(false); // output: 0 

Boolean(1); // output: true
Boolean(0); // output: false

Boolean(2); // output: true
Boolean(3); // output: true

Boolean(-1); // output: true
Boolean(-2); // output: true

Boolean(null); // output: false
Boolean(undefined); // output: false

String(null); // output: 'null'
String(undefined); // output: 'undefined'

Number(null); // output: 0
Number(undefined); // output: NaN

Number(NaN); // output: NaN
console.log(typeof NaN); // Number

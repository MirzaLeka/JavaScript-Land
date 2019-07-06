const { derivative, log, atan2, sqrt } = require ('mathjs');

const res = atan2(3, -3) / Math.PI;
console.log(res);

const result = derivative('x^2 + 2', 'x')       
console.log(result)

const output = sqrt(36);
console.log(output);

const Log = log(10000, 10);
console.log(Log);

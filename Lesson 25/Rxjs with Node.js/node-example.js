const { of } = require('rxjs');
const { delay } = require('rxjs/operators');

const getSum = () => of(true).pipe(delay(3000));

getSum().subscribe((s) => console.log(s));

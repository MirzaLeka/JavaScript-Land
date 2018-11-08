
const {add, square} = require('./utils');

it('Should add two numbers', () => {
    const res = add(33,11);

    if (res!=44) {
        throw new Error(`Expected 44, but got ${res}`);
    }

});

it('Should square a number', () => {
    const num = square(3);

    if ( isNaN(num) ) {
        throw new Error(`Expected type number.`);
    }
});


// Run test command: npm test

// Watch for changes, Run: nodemon --exec "npm test"  OR  "nodemon --exec  \" npm test\""

// OR type npm run test-watch // will run test-watch script from package.json
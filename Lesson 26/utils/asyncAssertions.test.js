
const expect = require('expect');

const { asyncAdd, asyncSquare } = require('./utils');

// when testing async code we need to pass done argument.
// without it, mocha would just return test passed even though it might be an error

it('Should get sum of two numbers async way', (done) => {

  asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done(); // here we call done(); 

  });   
});

// mocha will wait until done() is called to test will our test pass or not

it('Should sqaure a number in async way', (done) => {

  asyncSquare(4, (squared) => {
    expect(squared).toBe(16);
    done(); // if we don't call done() test will never finish

  });  
});

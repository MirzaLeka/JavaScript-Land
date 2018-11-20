
const expect = require('expect');

const { add, square, setName } = require('./utils');

it('Should add two numbers', () => {
  const res = add(33, 11);

  expect(res).toBe(44).toBeA('number');

});

it('Should square a number', () => {
  const num = square(3);

  expect(num).toBe(9).toBeA('number');

});

it('Should expect some values', () => {
  //  expect(12).toNotBe(12); // we are expecting 12 to not be equal to 12 and this will fail

  // expect({name: "Mirza"}).toBe({name: "Mirza"}); // will fail because these are two different objects

  // toBe uses strict equality

  // however if we want to make equal without strict equality we can use toEqual

  expect({ name: 'Mirza' }).toEqual({ name: 'Mirza' }); // this will pass

  expect([1, 2, 3]).toInclude(1); // yes it does include number 1

  expect([1, 2, 3]).toExclude(4); // 4 is not in array, thus this will pass

  // opposite of toBe is toNoBe
  // opposite of toEqual is toNotEqual
  // opposite of toInclude is toExclude

  // excluding an object property

  expect({
    name: 'Mirza',
    age: 24
  }).toExclude({
    age: 23
  }); // will pass because age is 24

});


it('Should verify first and last name are set', () => {

  const user = { // we're creating a new object and setting some properties
    age: 24,
    location: 'Sarajevo'
  };
  
  // we'll pass previously created object as an argument of setName function
  // another parameter will be fullName, which we'll split and into first and last name and asign it as props of object we passed in utils.js file
  const result = setName(user, 'Bruce Wayne'); // we'll set return result of setName function (object) to be result variable, making result our object

  // Value of result object 
  /* 
 { age: 24,
    location: 'Sarajevo',
    firstName: 'Bruce',
    lastName: 'Wayne' 
  }
  */
 
  expect(result).toInclude({ firstName: 'Bruce', lastName: 'Wayne' }); // it does include, so it will pass
  expect(result.firstName).toBe('Bruce'); // will pass
  expect(result).toBeA('object'); // yes result variable is an object, so will pass

});

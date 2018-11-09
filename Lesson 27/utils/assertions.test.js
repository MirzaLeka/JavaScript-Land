
const expect = require('expect');

const {add, square} = require('./utils');

it('Should add two numbers', () => {
    const res = add(33,11);

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

   expect({name: "Mirza"}).toEqual({name: "Mirza"}); // this will pass

   expect([1,2,3]).toInclude(1); // yes it does include number 1

   expect([1,2,3]).toExclude(4); // 4 is not in array, thus this will pass

   // opposite of toBe is toNoBe
   // opposite of toEqual is toNotEqual
   // opposite of toInclude is toExclude

   // excluding an object property

   expect({
       name: "Mirza",
       age: 24
   }).toExclude({
       age: 23
   }); // will pass because age is 24

});
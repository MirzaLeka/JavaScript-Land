
// JavaScript console comes with history object that allows you to travel back and forth through browser pages

// Go to previously visited page:
history.back();

// Go to next page:
history.forward();

// Go to any page:
const number = 5; // number of pages

history.go(number); // go "number" pages forward
// if number is negative, you'll go "number" pages backwards

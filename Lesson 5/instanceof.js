
// The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object

function Player(username) {
  this.username = username;
}

const player1 = new Player('Spy4er');

console.log(player1 instanceof Player); // true => object player1 is instance of Player constructor

console.log(player1 instanceof Object); // true => player1 is instance of Object


const player2 = {};

console.log(player2 instanceof Player); // false => player2 is not instance of Player constructor

console.log(player2 instanceof Object); // true => player2 is an object

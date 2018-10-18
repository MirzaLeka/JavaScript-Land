
// We used prototypes before classes were invented in ES6

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

// if we encapsulate a function inside an object, it will Not appear appear in a __proto__ in dev tools console, but rather inside object
// So to add function to prototype we declare it using a constructor and prototype keyword

// We can attach prototype keyword only to constructor function.
// For instance of object we must use __proto__

User.prototype.login = () => {
    this.online = true;
    console.log(`${this.email} has logged in;`);
}

User.prototype.logout = () => {
    this.online = false;
    console.log(`${this.email} has logged out`);
}

let userOne = new User ('ryu@ninjas.com', 'Ryu');
let userTwo = new User ('ken@ninjas.com', "Ken");
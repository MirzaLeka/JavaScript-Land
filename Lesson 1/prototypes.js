
// We used prototypes before classes were invented in ES6
    // This is what is going on under the hood when we use classes

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

// Extending Users ES5
function Admin(...args) {
    User.apply(this, args); // extending User function and applying this keyword (and all it's attributes) to an Admin function
    this.role = "super admin"; // this line is available only to Admin. This extra property is unique for admin
}

// Inheriting methods from User and attaching them to Admin
Admin.prototype = Object.create(User.prototype); 
// Object.create creates new object
// since prototype is object, we'll create our own object which is based on User's prototype
// We pass in what we want to inherit and that's User.prototype

// We can add custom methos only for Admin
Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => user.email != u.email); // if emails match return false, then filter that user out of the array
}

let userOne = new User ('ryu@ninjas.com', 'Ryu');
let userTwo = new User ('ken@ninjas.com', "Ken");
let admin = new Admin("mirza@ninjas.com", "Mirza"); // we'll use Rest operator to turn this into an array

console.log(admin);
console.log(userOne);
// userOne.deleteUser(); this won't work because it's only available to admin 

let users = [userOne, userTwo, admin];

console.log("--------------------------")

console.log("Users: ", users);

console.log("--------------------------")

// We're deleting a user
admin.deleteUser(users[1]);

console.log("Users: ", users);

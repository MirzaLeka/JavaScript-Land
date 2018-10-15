
class User{

constructor(name, email) {
    this.name = name; // instead of saying userOne.name = name, then userTwo.name = name and repeat that for coutless of other users
    this.email = email; // we'll use this keyword, which in this instance acts like an object.
    // So if userOne is calling a function, that's equivalent to this. Sane applies to all other users.

    this.score = 0; // we'll set score property to zero every time new user is being created

    /** Constructor initialises objects (or gives them initial values) and we can see that whenever new user (object) is being created
     * it's given a property of name and it's initialized with a value pass in when we create a constructor
     * it's given an email that we pass in
     * and it's also given a score, not passed in, because this is something that all users share
     */
}

login() {
    console.log(this.name, " has logged in"); // Again we can use the this keyword to access object. So this.name === userOne.name and it applies to all other users
    this.score++;
    return this; // we need to return something in order to chain methods 
}

logout() {
    console.log(`${this.name} has logged out`);
    this.score++;
    return this; // return this user
}

updateScore() {
    console.log(`${this.name} has a scored ${this.score} points`);
   // we don't need this function, but why not!
   return this;  // just don't use the same name for property and method you're chaining
}

}


let userOne = new User("Mirza", "mirza@email.com"); // when we create new object like this we call it's constructor right away
let userTwo = new User("Ermin", "ermin@email.com");
let userThree = new User("Nino", "nino@email.com");


class Admin extends User { // admin is also a user so we'll extend User class
// with this Admin has access to all properties (variables and methods) of user and the unique ones, that will only be defined inside Admin class

    deleteUser(user) { // only admin should be able to delete user. if we call this method with an object from User class it won't work

        users = users.filter( u => u != user ); 
        // so what we're doing is filtering an array of users and removing the item (object) that matches the argument of our function 
    }


}

// now let's delete userOne and console.log the users array (or what's left of it)


console.log(userOne.name);

userOne.login().updateScore().logout().updateScore();

let admin = new Admin("Admin", "admin@email.com"); // we need to create an admin object as well

let users = new Array(userOne, userTwo, userThree, admin); // admin is also a user

console.log(users);

console.log('--------------------------')

admin.deleteUser(userOne);

admin.login().updateScore(); // like I said, admin have acess to properties of user, because it inherited in

console.log(users);
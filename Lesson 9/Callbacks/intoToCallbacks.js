
// CALLBACK FUNCTIONS

// Callback is a function that is passed as an argument to another function that receives the argument & executes that callback function

// Callbacks can be synchronous and asynchronous

// example without callbacks

// var users = ["Sam", "Lambert", "Grim"];

// function addUser(username) {
//     setTimeout(() => {
//         users.push(username);
//     }, 1000);
// }

// function getUsers() {
//     setTimeout(() => {
//     console.log(users);
//     }, 500);
// }

// // first add user to DB (array)
// addUser("Redding");
// // second get updated list of users
// getUsers();

// getUsers() will execute first, because timing is shorter, thus addUser() will not execute at all / on time


// example with callbacks

// var users = ["Sam", "Lambert", "Grim"];

// function addUser (username, callback) {
//     setTimeout(() => {
//         users.push(username);
//         callback();
//     }, 1000);
// }

// function getUsers() {
//     setTimeout(() => {
//         console.log(users);
//     }, 500)
// }

// addUser("Redding", getUsers); 
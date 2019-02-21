
// Before we go into async callbacks let's look Database example without callbacks

// No Async Callbacks

let users = ["Sam", "Lambert", "Grim"];

// we create function for adding new users to our DB (array of users)
function addUser(username) {
    setTimeout(() => {
        users.push(username);
    }, 1000);
}

// but we also create a function where we get all of our users
function getUsers() {
    setTimeout(() => {
    console.log(users);
    }, 500);
}

// Now looking at the numbers, it takes 500 ms to get all users and twice as much (1000) to add new user
// if we now call addUser and pass a new user and then call getUsers we would expect JS to add new user and then get all users, but that won't be the case

addUser("Redding");
getUsers();

// getUsers() will execute first, because timing is shorter, thus by the time addUser() gets executed we'll get list of only 3 users
// Unless we can speed up addUser request things will always be like this, but what can also do is use Asynchronous callbacks!


// Example with Async Callbacks

let cars = ["golf", "porsche", "hyundai"];

// We use Asynchronous callbacks to force order of operations

// Our callback argument is actually a function that points to getCars function in addCar call
// We won't call getCars() like last time. We'll call addCar() and then execute getCars() within using callback that we pass

function addCar(carName, callback) {
  setTimeout(() => {
    cars.push(carName); // first thing we do is push new car into an array
    callback(); // then we execute callback, which will connsole.log all cars as it states in getCars()
  }, 1000)
}

// This is our callback function
function getCars() {
  setTimeout(() => {
    console.log(cars);
  }, 500)
}

// The key part here is when calling addCar() function we pass carName and getCars function as a parameter, a callback function
addCar('Bmw', getCars);

// Now things will execute in order
// First we'll wait one second, add new car and then wait half a second to get all cars


window.onload = () => {
  getUsers();
};

let users = '';

function getUsers() {
 
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', '/users', true); // getting data from that /users route
  
  xhttp.onload = function () {
    if (this.status === 200) {
      users = this.responseText; // we'll fill users variable with what is inside users.json file
      users = JSON.parse(users); // what we get from server is always string, so we need to prase it into object

      // Note: Arrays are type Object in Javascript
      
      displayUsers();
    } else if (this.status === 404) {
      console.log('Route not found!');
    }
  };

  xhttp.onerror = function () { // I'm using normal functions because arrow functions don't bind this keyword
    console.log('Request failed!');
  };
  
  xhttp.send();
  

}

function User(username, age) {
  this.username = username;
  this.age = age;
}

document.querySelector('#saveBtn').addEventListener('click', save);
  

function save() {
    
  const username = document.querySelector('#username').value;
  const age = document.querySelector('#age').value;
  
  const newUser = new User(username, age);
  const response = document.querySelector('p');
    
  if (users.length === 0) {
    users.push(newUser);      
    response.textContent = 'User added!'; 
  } else {

    if (users.some(item => item.username === username)) {
      response.textContent = 'Username is in use. Try another one.';
    } else {
      users.push(newUser);
      addUser(newUser);
      response.textContent = 'User added!';
    }
  }
       
  displayUsers();
}


function addUser(user) {

  user = JSON.stringify(user); // I have to stringify it because i'm sending json as content-type

  const xhttp = new XMLHttpRequest();

  xhttp.open('POST', '/users', true);
  xhttp.setRequestHeader('Content-type', 'application/json'); // setting content-type that we are sending to the server

  xhttp.onload = () => {
    console.log('Loaded');
  };

  xhttp.onerror = () => {
    console.log('Something went wrong');
  };

  xhttp.send(user);

}

function displayUsers() {

  console.log(users);

  let list = '';

  users.forEach((user) => {
    list += `<div class="list"> 
    <p> <b>Username:</b> ${user.username} </p>
    <p> <b>Age:</b> ${user.age} </p>
    <button onclick="deleteUser(\`` + user.username + `\`)">X</button>
    </div>`;
  });

  document.querySelector('#users').innerHTML = list;

}


function deleteUser(username) {

  console.log(username);

}

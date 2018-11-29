
function User(username, age) {
  this.username = username;
  this.age = age;
}

document.querySelector('#saveBtn').addEventListener('click', save);
  
const users = new Array();
  
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
      response.textContent = 'User added!';
    }
  }
       
  console.log(users);
}

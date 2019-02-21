
// Now let's look at different ways we can use xhr methods

// XHR GET

const xhr = new XMLHttpRequest;

xhr.open('GET', 'data/tweets.json', true);

xhr.onload = function() {
  if (xhr.status == 200) { 
     console.log(xhr.responseText); 
  }
}

xhr.onerror = function() {
  console.log(xhr.statusText); 
}

xhr.send();


// XHR POST

const someData = JSON.stringify(someData); // We have to stringify it because we are sending json as content-type

const xhttp = new XMLHttpRequest();

xhttp.open('POST', '/someAPI', true);
xhttp.setRequestHeader('Content-type', 'application/json'); // setting content-type that we are sending to the server

xhttp.onload = () => {
  console.log(xhr.responseText); 
};

xhttp.onerror = () => {
   console.log(xhr.statusText); 
};

xhttp.send(user);


// XHR DELETE - delete one user

const xhp = new XMLHttpRequest();

const username = 'admin';

xhp.open('DELETE', `someApi/${username}`, true);
xhp.send(username);


// XHR PUT - update one user

const xhtr = new XMLHttpRequest();

const user = 'admin';

xhtr.open('PUT', `someApi/${user}`, true);
xhtr.send(username);

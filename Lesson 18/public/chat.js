
// Make connection => we need a script tag in index.html or to import the library below
// import io from 'socket.io-client'; // needs to be installed

// let's setup socket connection on frontend:
const socket = io().connect('http://localhost:3000');

// Query the DOM
const message = document.querySelector('#message');
const handle = document.querySelector('#handle');
const btn = document.querySelector('#send');
const output = document.querySelector('#output');

// Emit events
btn.addEventListener('click', function() {  
  
  // when we emit an event to a server we need to give it a name. In this case we named it chat
  // then on the server we we listen for the event we emitted (chat) using .on()
  // we type name of the event and data we want to pass. In this case that's an object
  socket.emit('chat', {
      message: message.value.trim(),
      handle: handle.value.trim()
  });    
  message.value = ''; // reseting input after the message is sent
});

// Listen for events => here we'll get data that is sent to all sockets as 'response' event and add it to DOM
socket.on('response', function(data) {
  output.innerHTML += `<p><strong>${data.handle}</strong>: ${data.message}</p>` // whatever is in output + new message
  // we know that data is an object with keys handle and message as we setup above
  feedback.innerHTML = '';  // reseting feedback message when message arrives to other sockets
});

// Broadcasting

// Unlike emitting broadcasting means sending a message to every client (socket) on the server except the one who is emitting that message
// Example of broadcasting can be "user is typing a message". We want others to see it, but there is no need for user who is typing it
// to see the message that he/she is typing a message

// we will add emit broadcasting event every time user starts typing a message
message.addEventListener('keypress', function() {
  // we name event 'typing' and we send the data. In this case that will be person who is typing that message
  socket.emit('typing', handle.value.trim());
});

// Here we are listening to feedback
socket.on('feedback', (data) => {
  // then we'll input feedback to the browser
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
  // in this case data is not an object but rather handle.value we sent earlier
});

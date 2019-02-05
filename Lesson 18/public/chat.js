
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
});

// Listen for events => here we'll get data that is sent to all sockets as 'response' event and add it to DOM
socket.on('response', function(data) {
  output.innerHTML += `<p><strong>${data.handle}</strong>: ${data.message}</p>` // whatever is in output + new message
  // we know that data is an object with keys handle and message as we setup above
});

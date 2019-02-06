const express = require('express');
const path = require('path');
const socket = require('socket.io');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
  res.send(`Page  <b>${req.path}</b> not found`);
});

const server = app.listen(3000, () => {
  console.log('Server started on port 3000');
});


// setting up sockets. we pass our server to socket function
const io = socket(server);

// sockets are two way connection. if we set it up on backend, we have to do the same on frontend.

// we can listen for events
// let's start with connection with the browser that fires a callback function once connection was made

io.on('connect', (socket) => { 
  // each socket is unique and each client connected to a server will have it's unique socket (argument)  
  console.log('made socket connection'); // this will print once we setup 'connect' event on frontend and open our site
  console.log(socket.id); // we'll see unique id. every time we refresh (different PC connects), we'll get different id

  // here we are listening for 'chat' we emitted on frontend and we recieve the data we sent (an object)
  socket.on('chat', function(data) {
      // now we'll send this message (data) to all other people who are connected to our server
      // what we are doing is emitting that message (data) to everyone else, so once again we type the name of the event we want to emit
      // and then on the client side we are listening for this event (in this case response) using .on()
      io.sockets.emit('response', data); // sockets refers to all sockets on our server
  });

  // Here we'll listen to the typing event we created and instead of emitting it we will broadcast it to every other socket (client)
  socket.on('typing', (data) => {
    socket.broadcast.emit('feedback', data); // we are sending the data to everyone else on event named 'feedback'
  });

});

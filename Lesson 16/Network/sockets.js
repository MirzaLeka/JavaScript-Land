// TCP Networking
const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
  socket.id= counter++;
  sockets[socket.id] = socket;  

  console.log('will print when client gets connected');
  socket.write('Welcome new client!\n');
});

// socket is duplex stream which means it can read and write events

socket.on('data', data => {
  console.log('will print whenever someone writes to a server');
  socket.write(data);
  // data is by defaut a buffer but write method converts it to utf8
  // @overload socket.write(data, 'utf8')

  // write to other sockets
  Object.entries(sockets).forEach(([, clientSocket]) => {
    clientSocket.write(clientSocket(data));
  });
});

socket.on('end', () => {
  // delete sockt on disconnect
  delete sockets[socket.id];
  console.log('will print when client gets disconnected!');
});


server.listen(3000, () => console.log('server started'));



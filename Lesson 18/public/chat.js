
// Make connection => we need a script tag in index.html or to import the library below
// import io from 'socket.io-client'; // needs to be installed

// let's create a variable named socket and asign it to io();
const socket = io();

socket.on('connect') // connection to backend event 'connect'

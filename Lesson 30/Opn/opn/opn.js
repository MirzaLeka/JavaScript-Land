
const opn = require('opn');

// Opn opens a certain website (URL) once we run the file using Node

// Opens the url in the default browser
opn('https://youtube.com');


// Specify the app to open in
opn('https://google.com', { app: 'firefox' });


// Specify app arguments
opn('https://twitter.com', { app: ['google chrome', '--incognito'] });


// private mode for opera
opn('https://facebook.com', { app: ['opera', '--Private browsing'] });


// Opens the image in the default image viewer
opn('dog.jpeg').then(() => {
  // image viewer closed
});

// To learn more about opn look for Useful links.txt file in Opn directory

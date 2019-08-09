const electron = require('electron');

const { app, BrowserWindow } = electron;

// when app starts
app.on('ready', () => {
  console.log('App is Ready!');

  // create new window with parameters provided
  const mainWindow = new BrowserWindow({width: 640, height: 480});

  // and load file
  mainWindow.loadURL(`file://${__dirname}/Browser/index.html`);

});

// start app: npm run electron

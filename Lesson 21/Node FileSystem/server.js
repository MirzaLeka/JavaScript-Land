
const express = require('express');
const path = require('path'); // core module
const userController = require('./controller/usersController');

const app = express();

// Static files
app.use('/resources', express.static(path.join(__dirname, '/resources')));

// Controller
app.use(userController);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('*', (req, res) => {
  const page = req.params['0'];

  res.send(`
<body style='margin: 0; background: lightblue;'>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
    <h1>Page ${page} was not found</h1>
    <button onclick="window.open('/')" style="cursor: pointer">Go Home</button>
  </div>
</body>
  `);

});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

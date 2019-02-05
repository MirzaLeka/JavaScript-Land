const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
  res.send(`Page  <b>${req.path}</b> not found`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

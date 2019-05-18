const express = require('express');
const app = express();

app.get('/someAPIRoute', (req, res) => {
  res.send({name: 'Mike'})
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
})

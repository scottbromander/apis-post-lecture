const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const pets = ['Baxter', 'Moxie'];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pets', (req, res) => {
  res.send(pets);
});

app.post('/pets', (req, res) => {
  // req.body = { name : 'Ella' }
  pets.push(req.body.name);
  res.sendStatus(201);
});

app.listen(5001, () => {
  console.log('Listening on port 5001!');
});

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
const db = require('./queries.js');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.get('/users', db.getUsers);
app.post('/user', db.createUser);
app.put('/users/:id', db.updateUser)
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
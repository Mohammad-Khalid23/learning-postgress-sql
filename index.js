const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
const db = require('./queries.js');
const redisAsync = require('./helper/redis')();

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


app.get('/teachers', db.getTeachers);
app.post('/teacher', db.addTeacher);
app.put('/teacher/:id', db.updateTeacherDetails)
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
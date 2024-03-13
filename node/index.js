// import
const { port, pgHost, pgDatabase, pgUser, pgPassword, pgPort } = require("./config");
const express = require("express");

const app = express();
const criteria_model = require('./criteriaModel')
const template_model = require('./templateModel')

// const bodyParser = require("body-parser");
// const cors = require("cors");
// app.use(cors());
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })

// const { Pool } = require("pg");
// const pgClient = new Pool({
//   user: pgUser,
//   host: pgHost,
//   database: pgDatabase,
//   password: pgPassword,
//   port: pgPort
// });

// module.exports = {
//   pgClient
// };

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/criteria', (req, res) => {
  criteria_model.getCriteria()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.get('/template', (req, res) => {
  template_model.getTemplate()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
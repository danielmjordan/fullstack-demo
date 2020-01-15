const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Report } = require('./db/queries');
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

//GET route to send all bug reports to user from database
app.get('/', (req, res) => {
  Report.find()
    .then((results) => res.status(200).send(results))
    .catch(err => res.status(404).send(err));
});

//POST method to add new bug report to database
app.post('/', (req, res) => {
  const report = new Report(req.body);
  report.save()
    .then((doc) => res.status(201).send(doc))
    .catch(err => res.status(418).send(err));
});

//catch all route


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});




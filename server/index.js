const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { db, Report } = require('./db/queries');
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

//GET route to send all bug reports to user from database
//find()
app.get('/', (req, res) => {

  res.send();
})

//POST method to add new bug report to database
//save()
app.post('/', (req, res) => {
  const report = new Report(req.body);
  report.save()
  .then(() => res.status(200).send(reporty))
  .catch(err => err);
})


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
})




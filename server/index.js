const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());


//GET route to send all bug reports to user from database
app.get('/', (req, res) => {
  console.log('get all reports route')
  res.send();
})

//POST method to add new bug report to database
app.post('/', (req, res) => {
  console.log('post new report route')
  res.send();
})



app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
})
//
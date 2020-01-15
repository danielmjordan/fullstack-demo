// create db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bugreports', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('database up and running'));

const BugSchema = new mongoose.Schema({
  bugName: Number,
  bugDescription: String,
  reportedBy: String,
  createdDate: { type: Date, default: Date.now },
  assignedTo: String,
  threatLevel: String,
});

const Report = mongoose.model('Report', BugSchema);

module.exports = Report;






/*
{
    bugName: '2',
    bugDescription: 'Do you support the Phantom Thieves?',
    reportedBy: 'Jeff',
    createdDate: '1/5/2020',
    assignedTo: 'Daniel',
    threatLevel: 'Low-Priority',
  }
*/





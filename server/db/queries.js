// create db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bugreports', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => console.log('database connection error'));
db.once('open', () => console.log('database up and running'));

const BugSchema = new mongoose.Schema({
  bugName: Number,
  bugDescription: String,
  reportedBy: String,
  createdDate: { type: Date, default: Date.now() },
  assignedTo: String,
  threatLevel: String,
});

const Report = mongoose.model('Report', BugSchema);

module.exports = { Report };









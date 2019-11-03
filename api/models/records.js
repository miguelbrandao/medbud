const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  answer: {
    required: true,
    type: String
  },
  date: {
    required: true,
    type: Date
  },
  medication: {
    required: true,
    type: Number
  },
  user: {
    required: true,
    type: Number
  }
});

module.exports = mongoose.model('records', RecordSchema);

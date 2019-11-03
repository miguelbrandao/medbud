const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicationSchema = new Schema({
  followup_no: Number,
  followup_yes: Number,
  n_id: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  reminderDate: Date,
  root: {
    required: true,
    type: Boolean
  },
  text: {
    required: true,
    type: String
  },
  user: Number
});

module.exports = mongoose.model('medications', MedicationSchema);

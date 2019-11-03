const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  birth_date: {
    required: true,
    type: Date
  },
  care_taker_name: {
    required: true,
    type: String
  },
  care_taker_phone_number: {
    required: true,
    type: String
  },
  civil_id: {
    required: true,
    type: String
  },
  n_id: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  sns_id: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model('users', UserSchema);

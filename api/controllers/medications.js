const Medication = require('../models/medications');

const Medications = module.exports;

Medications.index = id => {
  return Medication.find({ user: id }).exec();
};

Medications.show = id => {
  return Medication.find({ n_id: id }).exec();
};

Medications.destroy = id => {
  return Medication.delete({ n_id: id }).exec();
};

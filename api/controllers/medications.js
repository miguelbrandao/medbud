const Medication = require('../models/medications');

const Medications = module.exports;

Medications.index = id => {
  return Medication.find({ user: id }).exec();
};

Medications.show = id => {
  return Medication.find({ n_id: id }).exec();
};

Medications.store = data => {
  return Medication.create(data);
};

Medications.destroy = id => {
  return Medication.delete({ n_id: id }).exec();
};

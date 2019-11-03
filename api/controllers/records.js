const Record = require('../models/records');

const Records = module.exports;

Records.index = id => {
  return Record.find({ user: id }).exec();
};

Records.store = data => {
  return Record.create(data);
};

Records.destroy = id => {
  return Record.deleteOne({ _id: id }).exec();
};

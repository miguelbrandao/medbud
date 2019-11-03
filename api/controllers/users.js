const User = require('../models/users');

const Users = module.exports;

Users.show = id => {
  return User.find({ n_id: id }).exec();
};

Users.destroy = id => {
  return User.delete({ n_id: id }).exec();
};

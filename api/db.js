const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost:27017/iDoso', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Mongo ready`))
    .catch(err => console.log(`Mongo error: ${err}`));
};

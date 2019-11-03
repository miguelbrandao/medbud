const express = require('express');
const router = express.Router();
const History = require('../controllers/history');

router.get('/', (req, res) => {
  History.last()
    .then(data => res.jsonp(data))
    .catch(err => {console.log(err); res.status(400).jsonp(err);});
});

module.exports = router;

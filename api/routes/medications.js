const express = require('express');
const router = express.Router();
const Medications = require('../controllers/medications');

router.get('/users/:id', (req, res) => {
  Medications.index(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

router.get('/:id', (req, res) => {
  Medications.show(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

router.delete('/:id', (req, res) => {
  Medications.destroy(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;

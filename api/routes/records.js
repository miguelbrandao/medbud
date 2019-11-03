const express = require('express');
const router = express.Router();
const Records = require('../controllers/records');

router.get('/users/:id', (req, res) => {
  Records.index(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

router.post('/', (req, res) => {
  Records.store(req.body)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

router.delete('/:id', (req, res) => {
  Records.destroy(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;

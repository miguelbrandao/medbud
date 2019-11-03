const express = require('express');
const router = express.Router();
const Users = require('../controllers/users');

router.get('/:id', (req, res) => {
  Users.show(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

router.delete('/:id', (req, res) => {
  Users.destroy(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;

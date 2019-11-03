const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.jsonp({ app: 'Medications' });
});

module.exports = router;

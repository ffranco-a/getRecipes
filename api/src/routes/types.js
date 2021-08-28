const { Router } = require('express');

const types = Router();

types.get('/', (req, res) => {
  res.send('GET /types is working!');
});

module.exports = types;

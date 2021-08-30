const { Router } = require('express');
const { Diet } = require('../db.js');

const types = Router();

types.get('/', (req, res) => {
  // res.send('GET /types is working!'); // ← prueba inicial para ver si funcionaba
  Diet.findAll().then(r => res.json(r));
});

module.exports = types;

const { Router } = require('express');

const recipes = Router();

recipes.get('/', (req, res) => {
  let { name } = req.query;
  name
    ? res.send(`GET /recipes?name=${name} is working!`)
    : res.send('GET /recipes is working');
});

recipes.get('/:idReceta', (req, res) => {
  res.send(`GET /recipes/${req.params.idReceta} is working!`);
});

module.exports = recipes;

const { Router } = require('express');
// const { Recipe, Diet } = require('../db.js');
// const { Op } = require('sequelize'); // ← me traigo el `Op` para el filtrado con el query `?name`;
const { dbGeneralSearch, dbSearchByName, dbSearchById } = require('../actions/DB-Searchs.js');
const { apiGeneralSearch, apiSearchByName, apiSearchById } = require('../actions/API-Searchs.js');

const recipes = Router();

// GET request a la ruta /recipes
recipes.get('/', async (req, res) => {
  let { name } = req.query;
  if (name) {    //    ← ← ← ← ← ← TENGO QUE RETOCAR
    let dbFiltered = await dbSearchByName(name);
    let apiFiltered = await apiSearchByName(name);
    if (dbFiltered === null && apiFiltered === [])
    return res
      .status(404)
      .json({ error: 'No se encontraron recetas con ese nombre' });
    let filtered = [...dbFiltered, ...apiFiltered];
    return res.json(filtered);
  }

  let dbSearch = await dbGeneralSearch();
  let apiSearch = await apiGeneralSearch();
  res.json([...dbSearch, ...apiSearch]);
});

// GET request a la ruta /recipes/${id}
recipes.get('/:idReceta', async (req, res) => {
  const id = parseInt(req.params.idReceta);
  if (isNaN(id))
    // tiro error cuando no pasen un número por params
    return res.status(400).json({ TypeError: '¡El id debe ser un número!' });

  let dbSearch = await dbSearchById(id);
  if (dbSearch !== null) return res.json(dbSearch);
  
  try {
    let apiSearch = await apiSearchById(id);
    res.json(apiSearch);
  } catch (e) {
    res.status(500).json({ error: 'No se encontró una receta con ese id :(' });
  }
});

module.exports = recipes;

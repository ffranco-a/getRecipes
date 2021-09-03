const { Router } = require('express');
const { dbGeneralSearch, dbSearchByName, dbSearchById } = require('../actions/DB-Searchs.js');
const { apiGeneralSearch, apiSearchByName, apiSearchById } = require('../actions/API-Searchs.js');

const recipes = Router();

/////////////////////////////////////////
//  ↓ GET request a la ruta `/recipes`
//
recipes.get('/', async (req, res) => {
  // ↓ si me pasan name por query, busco por título de recetas,
  let { name } = req.query;
  if (name) {
    let dbFiltered = await dbSearchByName(name);
    return res.json(dbFiltered); // ← ← ← DELETE ME DELETE ME DELETE ME DELETE ME
    let apiFiltered = await apiSearchByName(name);
    let filtered = [...dbFiltered, ...apiFiltered];
    if (filtered.length === 0)
    return res
      .status(404) // ← revisar códigos de error
      .json({ error: 'No se encontraron recetas con ese nombre' });
    return res.json(filtered);
  }

  // ↓ si no me pasan name, devuelvo "todas" las recetas,
  let dbSearch = await dbGeneralSearch();
  res.json(dbSearch); // ← ← ← DELETE ME y descomentar las líneas de abajo
  // let apiSearch = await apiGeneralSearch();
  // res.json([...dbSearch, ...apiSearch]);
});

///////////////////////////////////////////////
//  ↓ GET request a la ruta `/recipes/${id}`
// 
recipes.get('/:idReceta', async (req, res) => {
  const id = req.params.idReceta;

  // ↓ si el id es uuid (tiene guiones) busco en mi db
  if (id.includes('-')) {
    let dbSearch = await dbSearchById(id);
    if (dbSearch !== null) return res.json(dbSearch);
    return res.status(404).json({ error: 'No se encontró una receta con ese id :(' });
  }

  // ↓ si no entró al if anterior, busco en la API
  try {
    let apiSearch = await apiSearchById(id);
    return res.json(apiSearch);
  } catch (e) {
    res.status(404).json({ error: 'No se encontró una receta con ese id :(' });
  }
});

module.exports = recipes;

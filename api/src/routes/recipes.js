const { Router } = require('express');
const { Recipe, Diet } = require('../db.js');
const { Op } = require('sequelize'); // ← me traigo el `Op` para el filtrado con el query `?name`;

const recipes = Router();

recipes.get('/', async (req, res) => {
  let { name } = req.query;
  if (name) {
    let filtered = await Recipe.findAll([
      {
        where: {
          title: {
            [Op.iLike]: `%${name}%`, // ← el operador `iLike` es identico al `like` excepto que es Case-Insensitive (indiferente a las mayúsculas-minúsculas) ♥
          },
        },
        include: {
          model: Diet,
          // through: {
          attributes: [],
          // },
        },
      },
    ]);
    if (filtered.length === 0)
      return res
        .status(404)
        .json({ error: 'No se encontraron recetas con ese nombre' });
    return res.json(filtered);
  }

  Recipe.findAll({
    include: {
      model: Diet,
      through: {
        attributes: [], // ← mando esto porque no necesito que se cargue la info de la tabla Recipe_Diets.
      },
    },
  }).then(r => res.json(r));
});

recipes.get('/:idReceta', async (req, res) => {
  // res.send(`GET /recipes/${req.params.idReceta} is working!`); // ← prueba inicial para ver si funcionaba
  const id = parseInt(req.params.idReceta);
  if (isNaN(id))
    // tiro error cuando no pasen un número por params
    return res.status(400).json({ TypeError: '¡El id debe ser un número!' });
  let found = await Recipe.findByPk(id, {
    // ← es probable que este request lo tenga que hacer a la API, para obtener las instrucciones/paso a paso.
    include: {
      model: Diet,
      through: {
        attributes: [],
      },
    },
  });
  if (found === null)
    return res
      .status(404)
      .json({ error: 'No se encontró ninguna receta con ese id' });
  res.json(found);
});

module.exports = recipes;

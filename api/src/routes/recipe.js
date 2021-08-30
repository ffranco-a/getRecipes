const { Router } = require('express');
const { Recipe } = require('../db.js');

const recipe = Router();

recipe.post('/', async (req, res) => {
  // res.send('POST /recipe is working!');
  const { title, summary, spoonacularScore, healthScore, analyzedInstructions } = req.body;
  if (!title || !summary)
    return res.status(500).json({
      error: '¡Las recetas sí o sí deben tener un nombre y una descripción!',
    }); // ← Tengo el presentimiento que no hace falta controlar esto acá sino en el controlled form del front.........
  const newRecipe = await Recipe.create({
    title,
    summary,
    spoonacularScore,
    healthScore,
    analyzedInstructions,
  });
  res.send('¡Receta agregada con éxito!');
});

module.exports = recipe;

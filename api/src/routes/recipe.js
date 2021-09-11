const { Router } = require('express');
const { Recipe } = require('../db.js');

const recipe = Router();

recipe.post('/', async (req, res) => {
  // res.send('POST /recipe is working!');
  const { title, summary, spoonacularScore, healthScore, analyzedInstructions, ingredients, diets, image } = req.body;
  if (!title || !summary)
    return res.status(500).json({
      error: '¡Las recetas sí o sí deben tener un nombre y una descripción!',
    }); // ← Tengo el presentimiento que no hace falta controlar esto acá sino en el `controlled form` del front.........
  const newRecipe = await Recipe.create({
    title,
    summary,
    spoonacularScore,
    healthScore,
    analyzedInstructions,
    ingredients,
    image,
  });
  if (diets.vegetarian) newRecipe.addDiet(1);
  if (diets.vegan) newRecipe.addDiet(2);
  if (diets.glutenFree) newRecipe.addDiet(3);
  if (diets.ketogenic) newRecipe.addDiet(6);
  if (diets.pescetarian) newRecipe.addDiet(7);
  if (diets.paleo) newRecipe.addDiet(8);
  if (diets.primal) newRecipe.addDiet(9);
  if (diets.whole30) newRecipe.addDiet(10);
  res.send('¡Receta agregada con éxito!');
});

module.exports = recipe;

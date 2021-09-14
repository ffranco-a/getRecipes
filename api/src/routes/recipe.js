const { Router } = require('express');
const { Recipe } = require('../db.js');

const recipe = Router();

recipe.post('/', async (req, res) => {
  // res.send('POST /recipe is working!');
  const { title, summary, spoonacularScore, healthScore, analyzedInstructions, ingredients, diets, image } = req.body;
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
  if (diets.vegan) newRecipe.addDiet(4);
  if (diets.glutenFree) newRecipe.addDiet(5);
  if (diets.ketogenic) newRecipe.addDiet(6);
  if (diets.pescatarian) newRecipe.addDiet(7);
  if (diets.paleo) newRecipe.addDiet(8);
  if (diets.primal) newRecipe.addDiet(9);
  if (diets.whole30) newRecipe.addDiet(10);
  res.send('¡Receta agregada con éxito!');
});

module.exports = recipe;

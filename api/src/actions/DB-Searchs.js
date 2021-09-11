const { Recipe, Diet } = require('../db.js');
const { Op } = require('sequelize'); // ← me traigo el `Op` para el filtrado con el query `?name`;

const INCLUDE = {
  model: Diet,
  attributes: ['name'], // ← aquí sólo necesito los nombres de las recetas, no su id ni su descripción.
  through: {
    attributes: [], // ← mando esto porque no necesito que se cargue la info de la tabla Recipe_Diets.
  },
};

/////////////////////////////////////////////////
//  BÚSQUEDA GENERAL en la BASE DE DATOS LOCAL
//
const dbGeneralSearch = async () => {
  let recipes = await Recipe.findAll({
    include: INCLUDE,
  });
  let response = [];
  for (var i = 0; i < recipes.length; i++) {
    response.push({
      ...recipes[i].dataValues,
      // diets: recipes[i].dataValues.diets.map(diet => diet.name.toLowerCase()),
      diets: recipes[i].dataValues.diets.map(diet => diet.name),
    });
  }
  return response;
};

////////////////////////////////////////////////////
//  BÚSQUEDA POR NOMBRE en la BASE DE DATOS LOCAL
//
const dbSearchByName = async name => {
  let recipes = await Recipe.findAll({
    where: {
      title: {
        [Op.iLike]: `%${name}%`, // ← el operador `iLike` es identico al `like` excepto que es Case-Insensitive (indiferente a las mayúsculas-minúsculas) ♥
      },
    },
    include: INCLUDE,
  });
  let response = [];
  for (var i = 0; i < recipes.length; i++) {
    response.push({
      ...recipes[i].dataValues,
      // diets: recipes[i].dataValues.diets.map(diet => diet.name.toLowerCase()),
      diets: recipes[i].dataValues.diets.map(diet => diet.name),
    });
  }
  return response;
};

////////////////////////////////////////////////
//  BÚSQUEDA POR ID en la BASE DE DATOS LOCAL
//
const dbSearchById = async id => {
  let recipe = await Recipe.findByPk(id, {
    include: INCLUDE,
  });
  let response = {
    ...recipe.dataValues,
    // diets: recipe.dataValues.diets.map(diet => diet.name.toLowerCase()),
    diets: recipe.dataValues.diets.map(diet => diet.name),
  };
  return response;
};

////////////////////
module.exports = {
  dbGeneralSearch,
  dbSearchByName,
  dbSearchById,
};

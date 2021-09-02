const { Recipe, Diet } = require('../db.js');
const { Op } = require('sequelize'); // ← me traigo el `Op` para el filtrado con el query `?name`;

const INCLUDE = {
  model: Diet,
  attributes: ['name'], // ← aquí sólo necesito los nombres de las recetas, no su id ni su descripción.
  through: {
    attributes: [], // ← mando esto porque no necesito que se cargue la info de la tabla Recipe_Diets.
  },
};

// BÚSQUEDA GENERAL en la BASE DE DATOS LOCAL
const dbGeneralSearch = () =>
  Recipe.findAll({
    include: INCLUDE,
  });

// BÚSQUEDA POR NOMBRE en la BASE DE DATOS LOCAL
const dbSearchByName = name =>
  Recipe.findAll({
    where: {
      title: {
        [Op.iLike]: `%${name}%`, // ← el operador `iLike` es identico al `like` excepto que es Case-Insensitive (indiferente a las mayúsculas-minúsculas) ♥
      },
    },
    include: INCLUDE,
  });

// BÚSQUEDA POR ID en la BASE DE DATOS LOCAL
const dbSearchById = id =>
  Recipe.findByPk(id, {
    include: INCLUDE,
  });


module.exports = {
  dbGeneralSearch,
  dbSearchByName,
  dbSearchById,
};

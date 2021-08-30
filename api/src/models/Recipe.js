const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.  // ← esa conexión se hace en db.js!!
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('recipe', {
    title: { // ← originalmente le había puesto "name" acá, pero como vi que desde la API esta prop me llega como "title" lo cambié. 
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT, // ← uso TEXT para que no tenga límite de caracteres
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.INTEGER,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  });
};

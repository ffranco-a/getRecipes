const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('diet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { // ← no era necesario pero quiero mostrarlo en el sitio igual, una breve descripción del tipo de dieta
      type: DataTypes.TEXT,
    }
  });
};

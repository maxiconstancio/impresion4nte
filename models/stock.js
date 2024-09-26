'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Stock.associate = function(models) {
    Stock.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      onDelete: 'CASCADE'
    });
  };
  return Stock;
};

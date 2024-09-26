'use strict';
module.exports = (sequelize, DataTypes) => {
  const Precio = sequelize.define('Precio', {
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Precio.associate = function(models) {
    Precio.belongsTo(models.Pedido, {
      foreignKey: 'pedido_id',
      onDelete: 'CASCADE'
    });
  };
  return Precio;
};

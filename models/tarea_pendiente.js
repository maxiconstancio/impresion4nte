'use strict';
module.exports = (sequelize, DataTypes) => {
  const TareaPendiente = sequelize.define('TareaPendiente', {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  TareaPendiente.associate = function(models) {
    TareaPendiente.belongsTo(models.Pedido, {
      foreignKey: 'pedido_id',
      onDelete: 'CASCADE'
    });
  };
  return TareaPendiente;
};

// models/presupuesto.js
module.exports = (sequelize, DataTypes) => {
    const Presupuesto = sequelize.define('Presupuesto', {
      monto: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      fecha_validez: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {});
    
    Presupuesto.associate = function(models) {
      Presupuesto.belongsTo(models.Pedido, { foreignKey: 'pedido_id' });
    };
    
    return Presupuesto;
  };
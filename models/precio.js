// models/precio.js
module.exports = (sequelize, DataTypes) => {
    const Precio = sequelize.define('Precio', {
      monto: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }
    }, {});
    
    Precio.associate = function(models) {
      Precio.belongsTo(models.Pedido, { foreignKey: 'pedido_id' });
    };
    
    return Precio;
  };
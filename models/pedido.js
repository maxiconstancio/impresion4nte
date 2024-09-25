// models/pedido.js
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
    
    Pedido.associate = function(models) {
      Pedido.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
      Pedido.belongsToMany(models.Producto, { through: 'Pedido_Producto' });
      Pedido.hasMany(models.TareaPendiente, { foreignKey: 'pedido_id' });
      Pedido.hasOne(models.Precio, { foreignKey: 'pedido_id' });
      Pedido.hasOne(models.Presupuesto, { foreignKey: 'pedido_id' });
    };
    
    return Pedido;
  };
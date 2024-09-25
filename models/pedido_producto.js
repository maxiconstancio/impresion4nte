// models/pedido_producto.js
module.exports = (sequelize, DataTypes) => {
    const Pedido_Producto = sequelize.define('Pedido_Producto', {
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {});
    
    return Pedido_Producto;
  };
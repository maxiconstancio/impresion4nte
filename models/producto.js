// models/producto.js
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING
      }
    }, {});
    
    Producto.associate = function(models) {
      Producto.belongsToMany(models.Pedido, { through: 'Pedido_Producto' });
      Producto.hasOne(models.Stock, { foreignKey: 'producto_id' });
    };
    
    return Producto;
  };
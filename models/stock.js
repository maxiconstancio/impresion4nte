// models/stock.js
module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('Stock', {
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {});
    
    Stock.associate = function(models) {
      Stock.belongsTo(models.Producto, { foreignKey: 'producto_id' });
    };
    
    return Stock;
  };
// models/tarea_pendiente.js
module.exports = (sequelize, DataTypes) => {
    const TareaPendiente = sequelize.define('TareaPendiente', {
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
    
    TareaPendiente.associate = function(models) {
      TareaPendiente.belongsTo(models.Pedido, { foreignKey: 'pedido_id' });
    };
    
    return TareaPendiente;
  };
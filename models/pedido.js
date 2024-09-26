'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    timestamps: true // Asegura que createdAt y updatedAt se gestionen automáticamente
  });

  Pedido.associate = function(models) {
    Pedido.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      onDelete: 'SET NULL'
    });
    Pedido.belongsToMany(models.Producto, {
      through: 'Pedido_Producto',
      foreignKey: 'pedido_id'
    });
    Pedido.hasMany(models.TareaPendiente, {
      foreignKey: 'pedido_id'
    });
    Pedido.hasOne(models.Precio, {
      foreignKey: 'pedido_id'
    });
    Pedido.hasOne(models.Presupuesto, {
      foreignKey: 'pedido_id'
    });
  };

  return Pedido;
};

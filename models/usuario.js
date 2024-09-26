'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Usuario.associate = function(models) {
    Usuario.belongsToMany(models.Rol, {
      through: 'Usuario_Rol',
      foreignKey: 'usuario_id'
    });
    Usuario.hasMany(models.Pedido, {
      foreignKey: 'usuario_id'
    });
  };
  return Usuario;
};

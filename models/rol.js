'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Rol.associate = function(models) {
    Rol.belongsToMany(models.Usuario, {
      through: 'Usuario_Rol',
      foreignKey: 'rol_id'
    });
  };
  return Rol;
};

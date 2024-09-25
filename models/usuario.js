'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Pedido, { foreignKey: 'usuario_id' });
    Usuario.belongsToMany(models.Rol, { through: 'Usuario_Rol' });
  };
  return Usuario;
};
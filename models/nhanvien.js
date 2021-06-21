'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhanvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Vitri, {foreignKey:'vitriId'})
      this.belongsTo(models.Chinhanh, {foreignKey:'chinhanhId'})
    }
  };
  Nhanvien.init({
    name: DataTypes.TEXT,
    phone: DataTypes.STRING,
    diachi: DataTypes.TEXT,
    luong: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nhanvien',
  });
  return Nhanvien;
};
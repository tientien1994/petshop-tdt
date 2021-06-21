'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thuonghieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Sanpham,{foreignKey:'thuonghieuId'})
    }
  };
  Thuonghieu.init({
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Thuonghieu',
  });
  return Thuonghieu;
};
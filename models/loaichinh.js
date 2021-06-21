'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaichinh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Loaisanpham,{foreignKey:'loaichinhId'})
      this.belongsTo(models.Loaitong,{foreignKey:'loaitongId'})
      this.hasMany(models.Sanpham,{foreignKey:'loaichinhId'})
    }
  };
  Loaichinh.init({
    name: DataTypes.TEXT,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loaichinh',
  });
  return Loaichinh;
};
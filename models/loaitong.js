'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaitong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Loaichinh,{foreignKey:'loaitongId'})
      this.hasMany(models.Sanpham,{foreignKey:'loaitongId'})
      this.hasMany(models.Loaisanpham,{foreignKey:'loaitongId'})
    }
  };
  Loaitong.init({
    name: DataTypes.TEXT,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loaitong',
    
  });
  return Loaitong;
};
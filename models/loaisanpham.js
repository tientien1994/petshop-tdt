'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaisanpham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Sanpham,{foreignKey:'loaisanphamId'})
      this.belongsTo(models.Loaichinh, {foreignKey:'loaichinhId'})
      this.belongsTo(models.Loaitong, {foreignKey:'loaitongId'})
    }
  };
  Loaisanpham.init({
   
    name: DataTypes.TEXT,
    link:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loaisanpham',
  });
  return Loaisanpham;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sanpham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Thuonghieu,{foreignKey:'thuonghieuId'})
      this.hasMany(models.Comment,{foreignKey:'sanphamId'})
      this.belongsTo(models.Loaisanpham,{foreignKey:'loaisanphamId'})
      this.belongsTo(models.Loaitong,{foreignKey:'loaitongId'})
      this.belongsTo(models.Loaichinh,{foreignKey:'loaichinhId'})
    }
  };
  Sanpham.init({
    name: DataTypes.TEXT,
    title: DataTypes.TEXT,
    gia: DataTypes.DECIMAL,
    luotxem: DataTypes.INTEGER,
    masanpham: DataTypes.STRING,
    soluong: DataTypes.INTEGER,
    loaitong:DataTypes.STRING,
    loaichinh: DataTypes.STRING,
    loaisanpham:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sanpham',
  });
  return Sanpham;
};
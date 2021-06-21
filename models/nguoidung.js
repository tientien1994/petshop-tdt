'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nguoidung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Comment,{foreignKey:'nguoidungId'})
    }
  };
  Nguoidung.init({
    name: DataTypes.TEXT,
    isadmin: DataTypes.BOOLEAN,
    matkhau: DataTypes.STRING,
    fullname: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Nguoidung',
  });
  return Nguoidung;
};
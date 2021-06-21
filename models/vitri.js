'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vitri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Nhanvien,{foreignKey:'vitriId'})
    }
  };
  Vitri.init({
    tenchucvu: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Vitri',
  });
  return Vitri;
};
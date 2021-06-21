'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chinhanh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Nhanvien,{foreignKey:'chinhanhId'})
      this.belongsTo(models.Vung, {foreignKey: 'vungId' });
    }
  };
  Chinhanh.init({
    name: DataTypes.TEXT,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    diachi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Chinhanh',
  });
  return Chinhanh;
};
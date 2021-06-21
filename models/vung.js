'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.hasMany(models.Chinhanh, {foreignKey: 'vungId' });
    }
  };
  Vung.init({
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Vung',
  });
  return Vung;
};
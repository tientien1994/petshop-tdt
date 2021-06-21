'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tlbaiviet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Baiviet, {foreignKey:'tlbaivietId'})
    }
  };
  Tlbaiviet.init({
    tentheloai: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Tlbaiviet',
  });
  return Tlbaiviet;
};
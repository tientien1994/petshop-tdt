'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khoanggia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Khoanggia.init({
    min: DataTypes.INTEGER,
    minname:DataTypes.TEXT,
    maxname:DataTypes.TEXT,
    max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Khoanggia',
  });
  return Khoanggia;
};
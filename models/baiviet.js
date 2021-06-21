'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baiviet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Tlbaiviet,{foreignKey:'tlbaivietId'})
    }
  };
  Baiviet.init({
    name: DataTypes.TEXT,
    luotxem: DataTypes.INTEGER,
    title:DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Baiviet',
  });
  return Baiviet;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Nguoidung,{foreignKey:'nguoidungId'})
      this.belongsTo(models.Sanpham,{foreignKey:'sanphamId'},{onDelete:'cascade', hooks:true})
      this.belongsTo(models.Comment, { as: 'commentcha', foreignKey: 'parent' });
      this.hasMany(models.Comment, { as: 'commentcon', foreignKey: 'parent' });
    }
  };
  Comment.init({
    ndcmt: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
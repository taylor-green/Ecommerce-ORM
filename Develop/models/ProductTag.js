const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id 
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product_id 
    product_id: {
      type: DataTypes.INTEGER,
      // references the product model's id 
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // tag_id 
    tag_id: {
      type: DataTypes.INTEGER,
      // references the tag model's id 
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

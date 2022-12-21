const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {

};

Item.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        },
      });
    
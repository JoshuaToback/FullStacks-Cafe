const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MenuItems extends Model {}

MenuItems.init(
    {
      id: {
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
      }
      },
      
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'menuitems',
      }
    );

module.exports = MenuItems;
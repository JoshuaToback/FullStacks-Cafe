const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Hours extends Model {}

Hours.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        opening_time: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        closing_time: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'hours',
      }
    );
    
    module.exports = Hours;
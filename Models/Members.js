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
        }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'members',
      }
    );
    
    module.exports = Hours;
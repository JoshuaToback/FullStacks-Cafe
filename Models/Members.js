const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Members extends Model {}

Members.init(
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
    
    module.exports = Members;
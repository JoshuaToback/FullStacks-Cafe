const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class OrderHistory extends Model {}

OrderHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ending_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderhistory',
  }
);

module.exports = OrderHistory;

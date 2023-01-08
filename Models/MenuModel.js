const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Menu extends Model {}

Menu.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    Price: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
}
);

module.exports = Menu;
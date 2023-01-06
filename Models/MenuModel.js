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
    menu_item_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
}
);

module.exports = Menu;
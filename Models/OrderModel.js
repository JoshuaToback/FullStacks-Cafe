const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    menu_item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Menu",
            key: "id"
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
}
);

module.exports = Order;
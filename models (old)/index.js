const MenuItems = require('./MenuItems');
const OrderHistory = require('./OrderHistory(Add/RemoveLater)');
const Order = require('./Order');

Order.hasMany(MenuItems, {
  foreignKey: 'menuitems_id',
});

OrderHistory.hasMany(Order, {
  foreignKey: 'order_id',
});

Order.belongsTo(OrderHistory, {
  foreignKey: 'orderhistory_id',
});

module.exports = { MenuItems, Order, OrderHistory };

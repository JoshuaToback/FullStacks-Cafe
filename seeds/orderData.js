const { Order } = require('../models');

const Orderdata = [
];

const seedOrders = () => Order.bulkCreate(Orderdata);

module.exports = seedOrders;

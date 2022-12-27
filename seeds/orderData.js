const { order } = require('../models');

const Orderdata = [
];

const seedOrders = () => order.bulkCreate(Orderdata);

module.exports = seedOrders;

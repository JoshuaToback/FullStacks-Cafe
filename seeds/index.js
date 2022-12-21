const sequelize = require('../config/connection');
const seedMenuitems = require('./MenuData');
const seedOrders = require('./OrderData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMenuitems();

  await seedOrders();

  process.exit(0);
};

seedAll();

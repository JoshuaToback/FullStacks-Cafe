const { Menuitems } = require('../models');

const MenuData = [
  {
    item_name: 'Avocado Toast',
    Price: 14,
  },
  {
    item_name: 'Eggs Benedict',
    Price: 9,
  },
  {
    item_name: 'Pancakes',
    Price: 10,
  },
  {
    item_name: 'Gravy & Biscuits',
    Price: 8,
  },
  {
    item_name: 'Coffee',
    Price: 5,
  },
  {
    item_name: 'Orange Juice',
    Price: 4,
  }
];

const seedMenuitems = () => Menuitems.bulkCreate(MenuData);

module.exports = seedMenuitems;

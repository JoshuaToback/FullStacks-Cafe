const { Menu } = require('../Models/ModelsIndex');

const menuItems = [
  {
    item_name: 'Avocado Toast',
    Price: 11.99,
  },
  {
    item_name: 'Scrambled Eggs',
    Price: 6.99,
  },
  {
    item_name: 'Pancakes',
    Price: 9.99,
  },
  {
    item_name: 'Gravy & Biscuits',
    Price: 8.99,
  },
  {
    item_name: 'French Toast',
    Price: 8.99,
  },
  {
    item_name: 'Omelette',
    Price: 14.99,
  },

  // Drinks
  {
    item_name: 'Coffee',
    Price: 2.39,
  },
  {
    item_name: 'Orange Juice',
    Price: 1.99,
  },
  {
    item_name: 'Milk',
    Price: 1.99
  },

  // Sides
  {
    item_name: 'Hashbrowns',
    Price: 2.39,
  },
  {
    item_name: 'Bacon',
    Price: 2.99,
  },
  {
    item_name: 'Toast',
    Price: 1.99,
  }
];

const seedMenuItems = () => Menu.bulkCreate(menuItems);

module.exports = seedMenuItems;

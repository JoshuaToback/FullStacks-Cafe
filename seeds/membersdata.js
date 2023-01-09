const { Members } = require('../models');

const membersdata = [
    
   
    {
        name: 'Julia Johnson',
    },
    {
        name: 'David Stewart',
    },
    {
        name: 'Joshua Toback',
    },
    {
        name: 'Josh Icard',
    },
    {
        name: 'Mark Turner',
    }
];

const seedMembers = () => Members.bulkCreate(membersdata);

module.exports = seedMembers;
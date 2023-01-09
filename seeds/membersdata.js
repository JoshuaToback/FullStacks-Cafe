const { Members } = require{'../models'};

const membersdata = [
    {
        name: 'Joshua Toback',
    },
    {
        name: 'David Stewart',
    },
    {
        name: 'Josh Icard',
    },
    {
        name: 'Mark Turner',
    },
    {
        name: 'Julia Johnson',
    }
];

const seedGallery = () => Members.bulkCreate(membersdata);

module.exports = seedMembers;
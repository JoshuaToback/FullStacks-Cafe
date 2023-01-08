const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  //process.env.DB_NAME,
  //process.env.DB_USER,
  //process.env.DB_PASSWORD,
  {
    host: 'cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    username: q7lpm35zgpf01cfy,
    password: kxur0928bicctfc3,
    port: 3306,
    database: xklwzntiuqjor2ku
  }
);

module.exports = sequelize;

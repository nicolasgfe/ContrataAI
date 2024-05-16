const Sequelize = require('sequelize');
const sequelize = new Sequelize("db", "user", "password", {
    dialect: 'sqlite',
    storage: './dev.sqlite',
  });
 
module.exports = sequelize;
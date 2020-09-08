const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/cabify", {
  logging: false,
});

module.exports = db;

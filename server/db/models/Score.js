const Sequelize = require("sequelize");
const db = require("../db");

const Score = db.define("score", {
  name: {
    type: Sequelize.STRING(3),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Score;

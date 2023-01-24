const Sequelize = require("sequelize");
//PC users - comment out lines 3-6
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
//PC users comment out lines 24-27
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);

//PC users db configuration
// const db = new Sequelize(
//   process.env.DATABASE_URL || {
//     host: "localhost",
//     port: 5432,
//     database: "toads-garden",
//     dialect: "postgres",
//     username: "postgres",
//     password: "admin",
//     config,
//   }
// );

module.exports = db;

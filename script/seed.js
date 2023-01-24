"use strict";

// const { BulkRecordError} = require('sequelize');
const { db, Score } = require("../server/db");
const scoreBase = require("./scoreBase");

async function seed() {
  try {
    await db.sync({ force: true });
    console.log("db synced!");
    await Promise.all(
      scoreBase.map((score) => {
        return Score.create(score);
      })
    );
    console.log(`seeded ${scoreBase.length} scores`);
  } catch (err) {
    console.log(err);
  }
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;

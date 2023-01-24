const router = require("express").Router();

const { Score } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allScores = await Score.findAll();
    res.json(allScores);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

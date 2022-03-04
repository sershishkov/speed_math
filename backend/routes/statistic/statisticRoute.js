const express = require('express');
const router = express.Router();

const {
  update__Statistic,
  getAll__Statistic,
} = require('../../controllers/statistic/statisticConroller');
const { protect } = require('../../middlewares/authMiddleware');

router.put('/', protect, update__Statistic);
router.get('/', getAll__Statistic);

module.exports = router;

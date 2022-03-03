const express = require('express');
const router = express.Router();

const { getAll__users } = require('../../controllers/users/userController');
const { protect, authorize } = require('../../middlewares/authMiddleware');

router.get('/', protect, authorize('admin'), getAll__users);

module.exports = router;

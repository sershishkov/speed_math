const express = require('express');
const router = express.Router();

const {
  register,
  login,
  logout,
  getMe,
} = require('../../../controllers/users/authController');
const { protect } = require('../../../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);

module.exports = router;

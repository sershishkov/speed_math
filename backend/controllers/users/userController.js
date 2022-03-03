const asyncHandler = require('express-async-handler');
const Model__user = require('../../models/Model__user');

//@desc   getAll__users
//@route  GET /api/users
//@acces  Private
exports.getAll__users = asyncHandler(async (req, res) => {
  const all__users = await Model__user.find();
  res.status(200).json(all__users);
});

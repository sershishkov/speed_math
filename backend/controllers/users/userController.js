const asyncHandler = require('express-async-handler');
const Model__user = require('../../models/Model__user');

//@desc   register_new__user
//@route  POST /api/users
//@acces  Public
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  //Check if user exists
  const user__Exists = await Model__user.findOne({ email });
  if (user__Exists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //Create user
  const user = await Model__user.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid user data');
  } else {
    sendTokenResponse(user, 200, res);
  }
});

//@desc   authenticate__user
//@route  POST /api/users/login
//@acces  Public
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please add email or password');
  }

  const user = await Model__user.findOne({ email }).select('+password');

  if (user && (await user.matchPassword(password))) {
    sendTokenResponse(user, 200, res);
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});
//@desc   Log user out / clear cookie
//@route  GET /api/v1/auth/logout
//@access Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    token: null,
  });
});

//@desc   Get user data__user
//@route  GET /api/users/me
//@acces  Private
exports.getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//Get token from model , create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  //Create token
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token });
};

const asyncHandler = require('express-async-handler');
const Model__statistic = require('../../models/Model__statistic');

//@desc   create__Statistic
//@route  post /api/statistics
//@acces  Private
exports.create__Statistic = asyncHandler(async (req, res) => {
  const { totalTasks, rightTasks, wrongTasks, totalTime } = req.body;
  // console.log(object);

  const newStatistic = {
    userID: req.user.id,
    totalTasks: +totalTasks,
    rightTasks: +rightTasks,
    wrongTasks: +wrongTasks,
    totalTime: +totalTime,
  };
  const created__Statistic = await Model__statistic.create(newStatistic);

  res.status(200).json(created__Statistic);
});

//@desc   update__Statistic
//@route  PUT /api/statistics
//@acces  Private
exports.update__Statistic = asyncHandler(async (req, res) => {
  const statistic = await Model__statistic.findOne({ userID: req.user.id });

  if (!statistic) {
    res.status(400);
    throw new Error('Statistic not found');
  }

  const { totalTasks, rightTasks, wrongTasks, totalTime } = statistic;

  const newStatistic = {
    totalTasks: totalTasks + +req.body.totalTasks,
    rightTasks: rightTasks + +req.body.rightTasks,
    wrongTasks: wrongTasks + +req.body.wrongTasks,
    totalTime: totalTime + +req.body.totalTime,
  };
  const updated__Statistic = await Model__statistic.findByIdAndUpdate(
    statistic._id,
    newStatistic,
    {
      new: true,
    }
  );

  res.status(200).json(updated__Statistic);
});

//@desc   update__Statistic
//@route  PUT /api/statistics
//@acces  Private
exports.getAll__Statistic = asyncHandler(async (req, res) => {
  const all_statistic = await Model__statistic.find()
    .populate({
      path: 'userID',
      select: 'name userAvatar',
    })
    .sort({
      totalTasks: 1,
    });

  if (!all_statistic) {
    res.status(400);
    throw new Error('Statistic not found');
  }

  res.status(200).json(all_statistic);
});

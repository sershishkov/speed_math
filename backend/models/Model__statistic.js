const mongoose = require('mongoose');

const statistic__Schema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    totalTasks: {
      type: Number,
      default: 0,
    },
    rightTasks: {
      type: Number,
      default: 0,
    },
    wrongTasks: {
      type: Number,
      default: 0,
    },
    totalTime: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('statistic', statistic__Schema);

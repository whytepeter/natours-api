const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    message: "",
    data: { users },
  });
});

exports.getUser = (req, res, next) => {
  res.status(500).json({
    status: "success",
    message: "This endpoint isn't ready yet",
  });
};

exports.createUser = (req, res, next) => {
  res.status(500).json({
    status: "success",
    message: "This endpoint isn't ready yet",
  });
};

exports.updateUser = (req, res, next) => {
  res.status(500).json({
    status: "success",
    message: "This endpoint isn't ready yet",
  });
};

exports.deleteUser = (req, res, next) => {
  res.status(500).json({
    status: "success",
    message: "This endpoint isn't ready yet",
  });
};

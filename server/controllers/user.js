//schema import
const User = require("../models/user");
const { Order } = require("../models/order");

//show user profile
exports.showUser = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

//update user profile
exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (error, user) => {
      if (error) {
        return res.status(400).json({
          error: "You are not authorized",
        });
      }
      user.password = undefined;
      res.json(user);
    }
  );
};

//get user history of orders
exports.userHistory = (req, res) => {
  Order.find({ user: req.profile._id })
    .populate("user", "_id firstName lastName")
    .sort("-created")
    .exec((error, orders) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      res.json(orders);
    });
};

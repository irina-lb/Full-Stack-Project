//schema import
const User = require("../models/user");

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

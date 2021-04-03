//packages import
const jwt = require("jsonwebtoken");

//schema import
const User = require("../models/user");

// sign up
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }, (error, _user) => {
    if (error) {
      return res.status(500).json({
        message: "Server error",
      });
    }
    if (_user) {
      return res.status(400).json({
        error: "User already exists",
      });
    }
    const user = new User(req.body);

    user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      user.salt = undefined;
      user.hashed_password = undefined;
      res.json({
        user,
      });
    });
  });
};

//login
exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "Email doesn't exist",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password don't match",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: process.env.TOKEN_EXPIRE });
    return res.json({ token, user });
  });
};

//signout
exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

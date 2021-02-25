//packages import
const expressJwt = require("express-jwt");

//schema import
const User = require("../models/user");

//require login
exports.requireLogIn = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});

//access by id
exports.userById = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

//user authorization
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied",
    });
  }
  next();
};

//admin authorization
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Access only for admins",
    });
  }
  next();
};

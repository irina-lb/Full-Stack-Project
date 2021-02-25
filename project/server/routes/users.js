//packages import
const express = require("express");

//controllers import
const { signup, login, signout } = require("../controllers/auth");
const { showUser, updateUser } = require("../controllers/user");

//router
const router = express.Router();

//middlewares
const { userSignupValidator } = require("../middlewares/validateAuth");
const {
  requireLogIn,
  userById,
  isAdmin,
  isAuth,
} = require("../middlewares/userAccess");

//routes
router.post("/signup", userSignupValidator, signup);
router.post("/login", login);
router.get("/signout", signout);
router.get("/user/:userId", requireLogIn, isAuth, showUser);
router.put("/user/:userId", requireLogIn, isAuth, updateUser);

router.param("userId", userById);

module.exports = router;

//packages import
const express = require("express");

//controllers import
const { signup, login, signout } = require("../controllers/auth");
const { showUser, updateUser, userHistory } = require("../controllers/user");

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

router.get("/user/orders/:userId", requireLogIn, isAuth, userHistory);

router.param("userId", userById);

module.exports = router;

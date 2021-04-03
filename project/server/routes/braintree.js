//packages import
const express = require("express");

//router
const router = express.Router();

//middlewares import
const { requireLogIn, isAuth, userById } = require("../middlewares/userAccess");

//controllers import
const { generateToken, processPayment } = require("../controllers/braintree");

router.get("/braintree/getToken/:userId", requireLogIn, isAuth, generateToken);
router.post("/braintree/payment/:userId", requireLogIn, isAuth, processPayment);

router.param("userId", userById);
module.exports = router;

//packages import
const express = require("express");

//router
const router = express.Router();

//middlewares import
const {
  requireLogIn,
  isAuth,
  userById,
  isAdmin,
  userHistory,
} = require("../middlewares/userAccess");
const { changeQuantity, orderById } = require("../middlewares/productAccess");

//controllers import
const {
  createOrder,
  showOrders,
  getStatus,
  updateStatus,
} = require("../controllers/order");

router.post(
  "/order/create/:userId",
  requireLogIn,
  isAuth,
  userHistory,
  changeQuantity,
  createOrder
);
router.get("/order/show/:userId", requireLogIn, isAuth, isAdmin, showOrders);
router.get("/order/status/:userId", requireLogIn, isAuth, isAdmin, getStatus);
router.put(
  "/order/:orderId/status/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  updateStatus
);

router.param("userId", userById);
router.param("orderId", orderById);
module.exports = router;

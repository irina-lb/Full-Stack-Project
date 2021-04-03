//import models
const { Order, Cart } = require("../models/order");

//create new order
exports.createOrder = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }

    res.json(data);
  });
};

//show all orders
exports.showOrders = (req, res) => {
  Order.find()
    .populate("user", "_id firstName lastName email address")
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

//get enum values
exports.getStatus = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};

//update order status
exports.updateStatus = (req, res) => {
  Order.updateOne(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (error, order) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      res.json(order);
    }
  );
};

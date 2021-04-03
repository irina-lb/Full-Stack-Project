//schema import
const Product = require("../models/product");
const { Order } = require("../models/order");

//find product by id
exports.productById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err || !product) {
        return res.status(400).json({
          error: "Product not found",
        });
      }
      req.product = product;
      next();
    });
};

//change sold and quantity
exports.changeQuantity = (req, res, next) => {
  let changes = req.body.order.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item._id },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });

  Product.bulkWrite(changes, {}, (error) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    next();
  });
};

//find order by id
exports.orderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((error, order) => {
      if (error || !order) {
        return res.status(400).json({
          error,
        });
      }
      req.order = order;
      next();
    });
};

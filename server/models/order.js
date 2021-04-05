const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    product: {
      type: ObjectId,
      ref: "Product",
    },
    name: String,
    price: Number,
    count: Number,
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [cartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    status: {
      type: String,
      default: "Processing",
      enum: ["Processing", "Delivered", "Cancelled"],
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, Cart };

//schema import
const User = require("../models/user");
//packages import
const braintree = require("braintree");
require("dotenv").config();

//connecting braintree
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

//client token
exports.generateToken = (req, res) => {
  gateway.clientToken.generate({}, function (error, response) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(response);
    }
  });
};

//charge the payment
exports.processPayment = (req, res) => {
  gateway.transaction.sale(
    {
      amount: req.body.amount,
      paymentMethodNonce: req.body.paymentMethodNonce,
      options: {
        submitForSettlement: true,
      },
    },
    (error, result) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};

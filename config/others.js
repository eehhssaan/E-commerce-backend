const rateLimit = require("express-rate-limit");
const Product = require("../models/Product");

const handleProductQuantity = (cart) => {
  cart.forEach((p) => {
    Product.updateOne(
      { _id: p._id },
      {
        $inc: {
          quantity: -p.quantity,
        },
      },
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("success");
        }
      }
    );
  });
};

const minutes = 30;
const emailVerificationLimit = rateLimit({
  windowMs: minutes * 60 * 1000,
  max: 3,
  handler: (req, res) => {
    res.status(429).send({
      success: false,
      message: `You made too many requests. Please try again after ${minutes} minutes.`,
    });
  },
});

const passwordVerificationLimit = rateLimit({
  windowMs: minutes * 60 * 1000,
  max: 3,
  handler: (req, res) => {
    res.status(429).send({
      success: false,
      message: `You made too many requests. Please try again after ${minutes} minutes.`,
    });
  },
});

module.exports = {
  handleProductQuantity,
  emailVerificationLimit,
  passwordVerificationLimit,
};

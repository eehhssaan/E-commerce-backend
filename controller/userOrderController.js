const Order = require("../models/Order");
const { handleProductQuantity } = require("../config/others");

// add order
const addOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      ...req.body,
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send(order);
    handleProductQuantity(order.cart);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Order by User
const getOrderByUser = async (req, res) => {
  try {
    let orders = await Order.find({ user: req.params.user });
    res.status(200).send(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

// Get Order by Id
const getOrderById = async (req, res) => {
  try {
    let order = await Order.find({ user: req.user._id }.sort({ _id: -1 }));
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { addOrder, getOrderByUser, getOrderById };

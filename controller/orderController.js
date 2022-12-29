const Order = require("../models/Order");

// get All Orders
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ _id: -1 });
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get Order by User
const getOrderByUser = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.params.user }).sort({
      _id: -1,
    });
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get order by id
const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).sort({
      _id: -1,
    });
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// update order
const updateOrder = async (req, res, next) => {
  const newStatus = req.body.status;

  Order.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: {
        status: newStatus,
      },
    },
    (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.status(200).send({
          message: "Order Updated Successfully!",
        });
      }
    }
  );
};

// delete order
const deleteOrder = async (req, res) => {
  Order.deleteOne(
    {
      _id: req.params.id,
    },
    (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Order Updated Successfully" });
      }
    }
  );
};

module.exports = {
  getAllOrders,
  getOrderByUser,
  getOrderById,
  updateOrder,
  deleteOrder,
};

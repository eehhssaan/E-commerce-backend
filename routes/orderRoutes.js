const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  getOrderByUser,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");

// get all orders
router.get("/", getAllOrders);

// get order by user
router.get("/:user", getOrderByUser);

// get order by id
router.get("/:id", getOrderById);

// update order
router.put("/:id", updateOrder);

// delete order
router.delete("/:id", deleteOrder);

module.exports = router;

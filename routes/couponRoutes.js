const express = require("express");
const router = express.Router();

const {
  addCoupon,
  addAllCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponController");

// Add coupon
router.post("/add", addCoupon);

// Add all coupons
router.post("/all", addAllCoupon);

// Get all coupons
router.get("/", getAllCoupons);

// Get coupon by id
router.get("/:id", getCouponById);

// Update coupon
router.put("/:id", updateCoupon);

// Delete coupon
router.delete("/:id", deleteCoupon);

module.exports = router;

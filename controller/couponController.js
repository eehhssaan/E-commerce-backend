const Coupon = require("../models/Coupon");

// Add Coupon
const addCoupon = async (req, res, next) => {
  try {
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.status(200).send({ message: "Coupon Added successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Add many Coupons
const addAllCoupon = async (req, res) => {
  try {
    await Coupon.insertMany(req.body);
    res.status(200).send({
      message: "Coupon Added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// Get all Coupons
const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({}).sort({ _id: -1 });
    res.status(200).send(coupons);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// Get by Id
const getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    res.status(200).send(coupon);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (coupon) {
      coupon.title = req.body.title;
      coupon.couponCode = req.body.couponCode;
      coupon.endTime = dayjs().utc().format(req.body.endTime);
      coupon.discountPercentage = req.body.discountPercentage;
      coupon.minimumAmount = req.body.minimumAmount;
      coupon.productType = req.body.productType;
      coupon.logo = req.body.logo;
      await coupon.save();
      res.send({ message: "Coupon Updated Successfully!" });
    }
  } catch (err) {
    res.status(500).send({
      message: "Coupon not found!",
    });
  }
};

const deleteCoupon = async (req, res) => {
  Coupon.deleteOne({ _id: req.params.params }, (err) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).send({ message: "Coupon Deleted Successfully!" });
    }
  });
};

module.exports = {
  addCoupon,
  addAllCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
};

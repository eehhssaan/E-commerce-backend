const express = require("express");
const router = express.Router();

const { passwordVerificationLimit } = require("../config/others");

const {
  registerAdmin,
  loginAdmin,
  forgetPassword,
  resetPassword,
  addStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
} = require("../controller/adminController");

//register a staff
router.post("/register", registerAdmin);

// login Admin
router.post("/login", loginAdmin);

// forgot password
router.post("/forgot-password", passwordVerificationLimit, forgetPassword);

// reset password
router.post("/reset-password", resetPassword);

// add admin
router.post("/add", addStaff);

// get all admin
router.get("/", getAllStaff);

// get admin by id
router.get("/:id", getStaffById);

// update admin
router.put("/:id", updateStaff);

// delete admin
router.delete("/:id", deleteStaff);

module.exports = router;

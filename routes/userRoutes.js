const express = require("express");
const router = express.Router();

const {
  verifyEmailAddress,
  registerUser,
  loginUser,
  forgetPassword,
  resetPassword,
  changePassword,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const {
  emailVerificationLimit,
  passwordVerificationLimit,
} = require("../config/others");

//verify email
router.post("/verify-email", emailVerificationLimit, verifyEmailAddress);

// register user
router.post("/register/:token", registerUser);

// login user
router.post("/login", loginUser);

// forget password
router.put("/forget-password", passwordVerificationLimit, forgetPassword);

// reset password
router.put("/reset-password", resetPassword);

// change password
router.post("/change-password", changePassword);

// get all users
router.get("/", getAllUsers);

// get users by id
router.get("/:id", getUserById);

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;

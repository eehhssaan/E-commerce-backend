const express = require("express");
const router = express.Router();

const {
  addCategory,
  addAllCategory,
  getShowingCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
} = require("../controller/categoryController");

// Add a category
router.post("/add", addCategory);

// Add All Categories
router.post("/all", addAllCategory);

//get only showing category
router.get("/show", getShowingCategory);

// Get all categories
router.get("/", getAllCategory);

// Find a category
router.get("/:id", getCategoryById);

// Update a category
router.put("/:id", updateCategory);

// update status
router.put("/status/:id", updateStatus);

// Delete a category
router.patch("/:id", deleteCategory);

module.exports = router;

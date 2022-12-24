const express = require("express");
const router = express.Router();

const { addCategory } = require("../controller/categoryController");

// Add a category
router.post("/category", addCategory);

module.exports = router;

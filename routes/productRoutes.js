const express = require("express");
const router = express.Router();

const {
  addProducts,
  addAllProducts,
  getShowingProducts,
  getDiscountedProducts,
  getAllProducts,
  getStockOutProducts,
  getProductBySlug,
  getProductById,
  updateProduct,
  updateStatus,
  deleteProduct,
} = require("../controller/productController");

// Add products
router.post("/add", addProducts);

// Add multiple products
router.post("/all", addAllProducts);

// get shwoing products
router.get("/showing", getShowingProducts);

// get discounted products
router.get("/discount", getDiscountedProducts);

// get all products
router.get("/", getAllProducts);

// out of stock products
router.get("/stock-out", getStockOutProducts);

// get product by slug
router.get("/:slug", getProductBySlug);

// get product by id
router.get("/:id", getProductById);

// update product
router.put("/:id", updateProduct);

// update product status
router.put("/status/:id", updateStatus);

// delete product
router.delete("/:id", deleteProduct);

module.exports = router;

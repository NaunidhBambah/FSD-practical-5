const express = require("express");
const router = express.Router();

const productController = require("../controllers/productcontroller");
const { validateProduct } = require("../middlewares/validation");

// GET all products
router.get("/", productController.getAllProducts);

// GET product by ID
router.get("/:id", productController.getProductById);

// POST create product (VALIDATION added)
router.post("/", validateProduct, productController.createProduct);

// PUT update product (VALIDATION added)
router.put("/:id", validateProduct, productController.updateProduct);

// DELETE product
router.delete("/:id", productController.deleteProduct);

module.exports = router;

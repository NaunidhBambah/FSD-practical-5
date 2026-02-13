const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartcontroller");
const { validateCart } = require("../middlewares/validation");

// GET cart items
router.get("/", cartController.getCart);

// POST add item to cart (VALIDATION added)
router.post("/", validateCart, cartController.addToCart);

// PUT update cart item (VALIDATION added)
router.put("/:id", validateCart, cartController.updateCartItem);

// DELETE remove item from cart
router.delete("/:id", cartController.removeFromCart);

module.exports = router;

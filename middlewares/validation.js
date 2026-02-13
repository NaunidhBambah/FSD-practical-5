// middlewares/validation.js

// Product Validation
function validateProduct(req, res, next) {
  const { name, price } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "Product name is required"
    });
  }

  if (price === undefined || typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      message: "Product price must be a positive number"
    });
  }

  next();
}

// User Validation
function validateUser(req, res, next) {
  const { name, email } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "User name is required"
    });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({
      message: "Valid email is required"
    });
  }

  next();
}

// Cart Validation
function validateCart(req, res, next) {
  const { product, quantity } = req.body;

  if (!product || typeof product !== "string" || product.trim() === "") {
    return res.status(400).json({
      message: "Product name is required in cart"
    });
  }

  if (quantity === undefined || typeof quantity !== "number" || quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be a positive number"
    });
  }

  next();
}

// Order Validation
function validateOrder(req, res, next) {
  const { user, product, quantity } = req.body;

  if (!user || typeof user !== "string" || user.trim() === "") {
    return res.status(400).json({
      message: "User name is required for order"
    });
  }

  if (!product || typeof product !== "string" || product.trim() === "") {
    return res.status(400).json({
      message: "Product name is required for order"
    });
  }

  if (quantity === undefined || typeof quantity !== "number" || quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be a positive number"
    });
  }

  next();
}

module.exports = {
  validateProduct,
  validateUser,
  validateCart,
  validateOrder
};

// controllers/cartcontroller.js

let cart = [
  { id: 1, product: "Laptop", quantity: 1 },
  { id: 2, product: "Phone", quantity: 2 },
];

// GET cart items
exports.getCart = (req, res) => {
  try {
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST add item
exports.addToCart = (req, res) => {
  try {
    const { product, quantity } = req.body;
    const newItem = { id: cart.length + 1, product, quantity };
    cart.push(newItem);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// PUT update cart item
exports.updateCartItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { product, quantity } = req.body;
    const item = cart.find((c) => c.id === id);
    if (!item) return res.status(404).json({ message: "Cart item not found" });
    item.product = product;
    item.quantity = quantity;
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE cart item
exports.removeFromCart = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    cart = cart.filter((c) => c.id !== id);
    res.json({ message: "Cart item removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

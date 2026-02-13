// controllers/ordercontroller.js

let orders = [
  { id: 1, user: "Amit", product: "Laptop", quantity: 1 },
  { id: 2, user: "Riya", product: "Phone", quantity: 2 },
];

// GET all orders
exports.getAllOrders = (req, res) => {
  try {
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET order by ID
exports.getOrderById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const order = orders.find((o) => o.id === id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST create order
exports.createOrder = (req, res) => {
  try {
    const { user, product, quantity } = req.body;
    const newOrder = { id: orders.length + 1, user, product, quantity };
    orders.push(newOrder);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// PUT update order
exports.updateOrder = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { user, product, quantity } = req.body;
    const order = orders.find((o) => o.id === id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.user = user;
    order.product = product;
    order.quantity = quantity;
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE order
exports.deleteOrder = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    orders = orders.filter((o) => o.id !== id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

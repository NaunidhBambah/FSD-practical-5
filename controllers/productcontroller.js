// controllers/productcontroller.js

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
];

// GET all products
exports.getAllProducts = (req, res) => {
  try {
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET product by ID
exports.getProductById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST create product
exports.createProduct = (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// PUT update product
exports.updateProduct = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const product = products.find((p) => p.id === id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    product.name = name;
    product.price = price;
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE product
exports.deleteProduct = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    products = products.filter((p) => p.id !== id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


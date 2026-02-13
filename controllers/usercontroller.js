// controllers/usercontroller.js

let users = [
  { id: 1, name: "Amit", email: "amit@example.com" },
  { id: 2, name: "Riya", email: "riya@example.com" },
];

// GET all users
exports.getAllUsers = (req, res) => {
  try {
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET user by ID
exports.getUserById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST create user
exports.createUser = (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// PUT update user
exports.updateUser = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = users.find((u) => u.id === id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.name = name;
    user.email = email;
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE user
exports.deleteUser = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    users = users.filter((u) => u.id !== id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


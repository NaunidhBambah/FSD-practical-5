const express = require("express");
const router = express.Router();

const userController = require("../controllers/usercontroller");
const { validateUser } = require("../middlewares/validation");

// GET all users
router.get("/", userController.getAllUsers);

// GET user by ID
router.get("/:id", userController.getUserById);

// POST create user (VALIDATION added)
router.post("/", validateUser, userController.createUser);

// PUT update user (VALIDATION added)
router.put("/:id", validateUser, userController.updateUser);

// DELETE user
router.delete("/:id", userController.deleteUser);

module.exports = router;

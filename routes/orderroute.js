const express = require("express");
const router = express.Router();

const orderController = require("../controllers/ordercontroller");
const { validateOrder } = require("../middlewares/validation");

// GET all orders
router.get("/", orderController.getAllOrders);

// GET order by ID
router.get("/:id", orderController.getOrderById);

// POST create order (VALIDATION added)
router.post("/", validateOrder, orderController.createOrder);

// PUT update order (VALIDATION added)
router.put("/:id", validateOrder, orderController.updateOrder);

// DELETE cancel order
router.delete("/:id", orderController.deleteOrder);

module.exports = router;

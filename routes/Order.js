// Routes /Product.js
const express = require("express");
const {
  createOrder,
  updateOrder,
  fetchOrderByUser,
  deleteOrder,
  fetchAllOrders,
} = require("../controller/Order");

const router = express.Router();

router
  .post("/", createOrder)
  .get("/user/:userId", fetchOrderByUser)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder)
  .get("/", fetchAllOrders);
exports.router = router;

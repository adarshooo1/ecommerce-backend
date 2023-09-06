// Routes /Product.js
const express = require("express");
const {
  createOrder,
  updateOrder,
  fetchOrderByUser,
  deleteOrder,
} = require("../controller/Order");

const router = express.Router();

router
  .post("/", createOrder)
  .get("/", fetchOrderByUser)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder);
exports.router = router;

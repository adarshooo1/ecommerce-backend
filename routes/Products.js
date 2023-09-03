// Routes /Product.js
const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchAProductById,
  updateProduct,
} = require("../controller/Product");

const router = express.Router();

router
  .post("/", createProduct)
  .get("/", fetchAllProducts)
  .get("/:id", fetchAProductById)
  .patch("/:id", updateProduct);

exports.router = router;

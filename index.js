// index.js
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productsRouters = require("./routes/Products");
const categoriesRouters = require("./routes/Categories");
const brandsRouters = require("./routes/Brands");
const cors = require("cors");

// Middlewares
server.use(express.json()); //To parse req.body

server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use("/products", productsRouters.router);
server.use("/categories", categoriesRouters.router);
server.use("/brands", brandsRouters.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("db connected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(1010, () => {
  console.log("http://localhost:1010");
});

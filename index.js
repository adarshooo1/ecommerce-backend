// index.js
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productsRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");
const userRouter = require("./routes/User");
const authRouter = require("./routes/Auth");
const cartRouter = require("./routes/Cart");
const orderRouter = require("./routes/Order");
const cors = require("cors");

// Middleware's
server.use(express.json()); //To parse req.body

server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server
  .use("/products", productsRouter.router)
  .use("/categories", categoriesRouter.router)
  .use("/brands", brandsRouter.router)
  .use("/users", userRouter.router)
  .use("/auth", authRouter.router)
  .use("/cart", cartRouter.router)
  .use("/orders", orderRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Database Connected");
}

server.get("/", (req, res) => {
  res.json({ status: "Success" });
});

server.listen(1010, () => {
  console.log("http://localhost:1010");
});

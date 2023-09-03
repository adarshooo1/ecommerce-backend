// Model /Product.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    min: [0, "Wrong min price"],
    max: [1000000, "Wrong max price"],
  },
  discountPercentage: {
    type: Number,
    min: [1, "Wrong min discount"],
    max: [99, "Wrong max discount"],
  },
  rating: {
    type: Number,
    min: [1, "Wrong min rating"],
    max: [5, "Wrong max rating"],
    default: 0,
  },
  stock: {
    type: Number,
    min: [0, "Wrong min stock"],
    default: 0,
  },
  brand: { type: String, required: true }, // Changed 'brands' to 'brand'
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true }, // Changed to an array of strings
  deleted: { type: Boolean, default: false }, // Removed 'required' as it's optional
});

const virtual = productSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

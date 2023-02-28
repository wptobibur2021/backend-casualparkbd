const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      lowercase: true,
    },
    desc: {
      type: String,
      trim: true,
      required: [true, "Please provide a description for this product"],
    },
    disPrice: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
      require: true,
    },
    images: {
      type: Array,
      required: [true, "Please provide image"],
    },
    size: {
      type: Array,
      require: [true, "Please provide product size"],
    },
    category: {
      type: String,
      required: [true, "Please provide category name"],
    },
    slug: {
      type: String,
      lowercase: true,
      unique: [true, "Slug name not a duplicate"],
      trim: true,
      required: [true, "Please provide slug"],
    },
    // quantity: {
    //   type: String,
    //   trim: true,
    //   required: [true, "Please provide product quntity"],
    // },
    productCode: {
      type: String,
      trim: true,
      required: [true, "Please provide product code"],
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Product", ProductSchema);

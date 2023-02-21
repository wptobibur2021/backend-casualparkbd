const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    catName: {
      type: String,
      required: [true, "Please provide a category name"],
      lowercase: true,
      trim: true,
      unique: [true, "Category name unique"],
      min: [3, "Please provide minimum 3 charecters"],
      max: [20, "Category name to long"],
    },
    catImg: {
      type: String,
      required: [true, "Please provide category image"],
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Category", CategorySchema);

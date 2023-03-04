const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    cartItems: {
      type: Array,
      required: [true, "Please provide product"],
    },
    total: {
      type: Number,
      required: [true, "Please provide total amount"],
    },
    orderId: {
      type: String,
      required: [true, "Please provide a orderId"],
    },
    totalQty: {
      type: Number,
      required: [true, "Please provide quantity"],
    },
    customerName: {
      type: String,
      required: [true, "Please provide a customer name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 6 characters"],
      maxLength: [30, "Name is to long"],
    },
    mobileNo: {
      type: String,
      required: [true, "Please provide mobile number"],
      trim: true,
      maxLength: [11, "Please provide right mobile number"],
    },
    addressFull: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: [5, "Please provide full address"],
    },
    paymentNo: {
      type: String,
      trim: true,
      maxLength: [11, "Please provide valid mobile number"],
    },
    tranNo: {
      type: String,
      trim: [true, "Please provide transaction "],
    },
    deleveryCharge: {
      type: String,
      required: [true, "Please provide delevery charge"],
    },
    status: {
      trype: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Order", OrderSchema);

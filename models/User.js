const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please provide a email"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please provide a password"],
    },
    mobileNo: {
      type: String,
      trim: [true, "Please provide a mobile number"],
    },
    nidNo: {
      type: String,
      trim: [true, "Please provide a NID Number"],
    },
    photo: {
      type: String,
      trim: true,
    },
    role: {
      type: Number,
      default: 0,
      required: [true, "Please provide a user roule"],
    },
    address: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("User", UserSchema);

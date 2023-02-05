const mongoose = require(' "mongoose";

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  availabel: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    deafult: "active",
  },
});

module.exports = mongoose.model("Coupon", couponSchema);

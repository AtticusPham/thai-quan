const mongoose = require(' "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
  },
  tags: {
    type: Array,
  },
  trademark: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Product", productSchema);

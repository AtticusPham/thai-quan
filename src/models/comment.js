const mongoose = require(' "mongoose";

const commentSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  personName: {
    type: String,
  },
  commentTitle: {
    type: String,
  },
  comment: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  reply: [
    {
      personName: {
        type: String,
      },
      comment: {
        type: String,
      },
      dateCreated: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Comment", commentSchema);

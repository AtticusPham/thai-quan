const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email invalid!");
      }
    },
  },
  gender: {
    type: String,
    default: "none",
  },
  avatar: {
    type: String,
    default: "none",
  },
  role: {
    type: String,
    default: "user",
  },
  status: {
    type: String,
    default: "active",
  },
});

// userSchema.pre("save", function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     bcrypt.hash(user.password, 8);
//   }
//   next();
// });

module.exports = mongoose.model("User", userSchema);

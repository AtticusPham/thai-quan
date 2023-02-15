const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const validator = require("validator");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    // address: {
    //   type: String,
    // },
    // phone: {
    //   type: Number,
    //   required: true,
    //   unique: true,
    //   trim: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   validate(value) {
    //     if (!validator.isEmail(value)) {
    //       throw new Error("Email invalid!");
    //     }
    //   },
    // },
    // gender: {
    //   type: String,
    //   default: "none",
    // },
    // avatar: {
    //   type: String,
    //   default: "none",
    // },
    // role: {
    //   type: String,
    //   default: "user",
    // },
    // status: {
    //   type: String,
    //   default: "active",
    // },
  })
);

// userSchema.pre("save", function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     bcrypt.hash(user.password, 8);
//   }
//   next();
// });


module.exports = User;

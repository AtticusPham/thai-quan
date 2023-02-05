const express = require('express')
// const auth = require('./auth')
const user = require('./user')
// const product = require('./product')
// const category = require('./category')
// const order = require('./order')
// const coupon = require('./coupon')
// const comment = require('./comment')

function route(app) {
    // app.use("/auth", auth);
    app.use("/user", user);
    // app.use("/product", product);
    // app.use("/category", category);
    // app.use("/order", order);
    // app.use("/coupon", coupon);
    // app.use("/comment", comment);
}

module.exports = route

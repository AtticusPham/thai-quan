require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`, {
            useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        console.log(`Connected to MongoDB: ${process.env.MONGODB_URL}`)
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = { connect }


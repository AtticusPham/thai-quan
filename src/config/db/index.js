require('dotenv').config();
const mongoose = require('mongoose');

const db = require("./src/models");
const Role = db.role;

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

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

module.exports = { connect }


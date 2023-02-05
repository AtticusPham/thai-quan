const express = require('express')
const { getAllUser, getUserById, addUser,  editUser } = require('../controllers/user')
const router = express.Router();

//get all user
router.get("/", getAllUser);

//get user by id
router.get("/:userId", getUserById);

//add user
router.post("/", addUser);

//edit user
router.put("/:userId", editUser);

module.exports = router;

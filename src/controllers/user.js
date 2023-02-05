const User = require("../models/user");

const HTTP_STATUS = require("../utils/constant");

//getAllUser
const getAllUser = (req, res) => {
  User.find()
    .then((users) => res.status(HTTP_STATUS.SUCCESS).send(users))
    .catch((e) => res.status(HTTP_STATUS.NOT_FOUND).send());
};

//getUserById
const getUserById = async (req, res) => {
  res.status(HTTP_STATUS.SUCCESS).send("This is get user by id");
};

const addUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((user) => res.status(HTTP_STATUS.SUCCESS).send(user))
    .catch((e) => res.status(HTTP_STATUS.BAD_REQUEST).send(e));
};

//Edit user, active, deactive
const editUser = async (req, res) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is edit user");
};

module.exports = {
  getAllUser: getAllUser,
  getUserById: getUserById,
  addUser: addUser,
  editUser: editUser,
};

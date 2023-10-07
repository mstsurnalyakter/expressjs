let users = require("../models/users.models");
const { v4: uuidv4 } = require("uuid");

// const users = require("../models/users.models");

// get users
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

// creatue users
const createUsers = (req, res) => {
  const newUsers = {
    id: uuidv4(),
    userName: req.body.userName,
    email: req.body.email,
  };
  users.push(newUsers);
  res.status(201).json(users);
};

// update user
const updateUsers = (req, res) => {
  const userId = req.params.id;
  const { userName, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectUser) => {
      (selectUser.userName = userName), (selectUser.email = email);
    });
  res.status(200).json({ users });
};


// delete user
const deleteUser = (req, res) =>{
  const userId = req.params.id;
 users = users.filter(user => user.id !== userId);
  res.status(200).json(users)
}

module.exports = {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUser
};

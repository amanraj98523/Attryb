// controller/user.controller.js
const register = (req, res) => {
  res.send("User registered!");
};

const login = (req, res) => {
  res.send("User logged in!");
};

const getUser = (req, res) => {
  res.send("All users data!");
};

const getSingleUser = (req, res) => {
  res.send(`Single user data for ID: ${req.params.id}`);
};

const updateUser = (req, res) => {
  res.send(`User updated for ID: ${req.params.id}`);
};

const deleteUser = (req, res) => {
  res.send(`User deleted for ID: ${req.params.id}`);
};

module.exports = { register, login, getUser, getSingleUser, updateUser, deleteUser };

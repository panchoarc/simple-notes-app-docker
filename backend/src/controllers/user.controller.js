const User = require("../models/User");

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
};

userCtrl.createUser = (req, res) => {
  const { username } = req.body;
  const newUser = new User({
    username: username,
  });
  console.log(newUser);
  newUser.save();
  res.status(201).json({
    message: "User Saved",
  });
};
userCtrl.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        username,
      }
    );

    res.json({ message: "User Updated", data: updatedUser });
  } catch (error) {
    console.log(error);
  }
};
userCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.status(204).json({
    message: "Note Deleted",
    data: user,
  });
};

module.exports = userCtrl;

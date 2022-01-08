const User = require("../models/user");

const userExists = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error(`ID: ${id} doesn't exist`);
  }
};

const emailExists = async (email = "") => {
  const email1 = await User.findOne({ email });
  if (email1) {
    throw new Error(`This email is already registered`);
  }
};

module.exports = {
  userExists,
  emailExists,
};

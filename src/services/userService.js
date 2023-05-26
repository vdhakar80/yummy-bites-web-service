const { getUserByEmail, registerUser } = require("../models/userModal");
const { comparePasswords } = require("../utilities/authentication");

const userService = {};
userService.findUserByEmailId = async (email, password) => {
  const data = await getUserByEmail(email);

  if (!data) {
    let err = new Error("Requested user is not registered");
    err.status = 404;
    throw err;
  } else if (await comparePasswords(password, data.password)) {
    return data;
  } else {
    let err = new Error("Invalid EmailId or password");
    err.status = 401;
    throw err;
  }
};

userService.registerUser = async (user) => {
  // console.log("inside service");
  const userData = await getUserByEmail(user.emailId);
  if (userData) {
    let err = new Error("User Already exist");
    err.status = 409;
    throw err;
  }
  const data = await registerUser(user);
  if (!data) {
    let err = new Error("User Registration Failed. Please Try again");
    err.status = 500;
    throw err;
  }
  return data;
};
module.exports = userService;

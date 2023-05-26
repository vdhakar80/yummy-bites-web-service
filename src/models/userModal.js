const { userModal } = require("./../utilities/connection");

const userDb = {};

const generateUniqueId = async () => {
  const userId = await userModal.distinct("userId");
  let ids = [];
  for (let id of userId) {
    ids.push(id.substr(1));
  }
  let Id = Math.max(...ids);
  return "U" + (Id + 1);
};

const getUser = (email) => {
  userModal.find().then((user) => {
    return user;
  });
};
const registerUser = async (user) => {
  let newUser = new userModal(user);
  newUser.userId = await generateUniqueId();
  const userData = await newUser.save();
  return userData;
};

const getUserByEmail = async (email) => {
  const user = await userModal.findOne({ emailId: email });
  return user;
};

const updateUser = (user) => {
  userModal
    .updateOne({ emailId: user.emailId }, { $set: user })
    .then((user) => {
      // console.log(user);
      return user;
    });
};

// getUserByEmail("muskan@gmail.com");

module.exports = {
  generateUniqueId,
  updateUser,
  getUserByEmail,
  registerUser,
  getUser,
};

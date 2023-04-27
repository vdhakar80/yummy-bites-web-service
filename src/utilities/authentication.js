const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const authentication = {};
const saltRounds = 10;

authentication.generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

authentication.verifyJwtToken = (token) => {
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    return user;
  });
};

authentication.comparePasswords = async (password, hashedPassword) => {
  const isValidPassword = await bcrypt.compare(password, hashedPassword);
  return isValidPassword;
};

authentication.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
module.exports = authentication;

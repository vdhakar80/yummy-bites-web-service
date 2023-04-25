const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const authentication = {};
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

module.exports = authentication;

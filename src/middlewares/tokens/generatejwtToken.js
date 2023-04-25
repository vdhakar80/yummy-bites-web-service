const jwt = require("jsonwebtoken");
function generateToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    // const token = jwt.sign(payload, "vicky", {
    expiresIn: "1h",
  });
  return token;
}
module.exports = generateToken;

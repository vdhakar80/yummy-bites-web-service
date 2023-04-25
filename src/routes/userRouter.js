const express = require("express");
const generateToken = require("../middlewares/tokens/generatejwtToken");
const router = express.Router();
const bcrypt = require("bcrypt");
const { getUser } = require("../models/userModal");
const { findUserByEmailId, registerUser } = require("../services/userService");

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const { emailId, password } = req.body;
    const data = await findUserByEmailId(emailId, password);
    const token = await generateToken({ emailId, password });
    res.cookie("jwt", token, { httpOnly: true, secure: true });
    res.status(200).send({ token: token });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = req.body;
    const data = await registerUser(user);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// router.get("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = { name: "Vicky", email: "vick@gmail.com", password: "1234" };
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }
//   const saltRounds = 10;
//   const salt = await bcrypt.genSalt(saltRounds);
//   const hashedPassword = await bcrypt.hash(user.password, salt);
//   const isValidPassword = await bcrypt.compare(password, hashedPassword);
//   if (!isValidPassword) {
//     return res.status(401).json({ message: "Invalid password" });
//   }
//   const token = generateToken(user);
//   res.json({ token });
// });

router.get("/user", async (req, res) => {
  let data = await getUser();
  res.send(data);
});
module.exports = router;

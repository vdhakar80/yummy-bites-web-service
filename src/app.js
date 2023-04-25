const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const bodyParser = require("body-parser");
const errorLogger = require("./utilities/errorLogger.js");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse raw text
// app.use(bodyParser.text());

app.use("/user", userRouter);
app.use(errorLogger);
app.listen(5000, () => {
  console.log("server Running at port 5000");
});

module.exports = app;

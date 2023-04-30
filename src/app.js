const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const itemsRouter = require("./routes/itemsRouter.js");
const uploadRouter = require("./routes/uploadRouter.js");
const bodyParser = require("body-parser");
const errorLogger = require("./utilities/errorLogger.js");
require("dotenv").config();
const cors = require("cors");
const multer = require("multer");
const { Buffer } = require("node:buffer");
app.use(cors());
// parse application/json
app.use(bodyParser.json({ limit: "50mb" }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/user", userRouter);
app.use("/items", itemsRouter);
app.use("/", uploadRouter);
app.use(errorLogger);
app.listen(5000, () => {
  console.log("server Running at port 5000");
});

module.exports = app;

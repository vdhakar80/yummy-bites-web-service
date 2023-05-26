const fs = require("fs");

const errorLogger = (err, req, res, next) => {
  // console.log("inside error logger");
  fs.appendFile("./ErrorLogger.txt", err.stack + "\n", (error) => {
    if (error) console.log("logging error failed");
  });
  if (err.status) res.status(err.status);
  else res.status(500);
  res.json({ message: err.message });
  next();
};

module.exports = errorLogger;

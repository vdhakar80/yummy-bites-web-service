const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

const connectionString = "mongodb://127.0.0.1:27017/yummyBites";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

let collections = {};

collections.userModal = mongoose.model("User", userSchema);

module.exports = collections;

const { Schema } = require("mongoose");
const userSchema = Schema(
  {
    name: String,
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    contactNo: Number,
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*~-]).{8,}$/.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid Password!`,
      },
    },
    orders: [String],
    profilePicture: String,
    address: String,
    city: String,
    state: String,
    country: String,
  },
  { collection: "User" }
);
module.exports = userSchema;

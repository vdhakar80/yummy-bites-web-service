const { Schema } = require("mongoose");

const itemsSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = itemsSchema;

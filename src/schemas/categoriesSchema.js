const { Schema } = require("mongoose");
const category = new Schema({
  image: String,
  categoryId: String,
  name: String,
  price: String,
  Description: String,
});
const categoriesSchema = new Schema(
  {
    pizza: [category],
    burgur: [category],
    sandwich: [category],
    hotDog: [category],
    aaluParatha: [category],
    momos: [category],
    springRoll: [category],
    poha: [category],
    dosa: [category],
    idly: [category],
  },
  { collection: "Categories" }
);
module.exports = categoriesSchema;

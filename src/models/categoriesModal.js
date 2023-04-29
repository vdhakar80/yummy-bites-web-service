const { categoriesModal } = require("./../utilities/connection");
const categoriesDb = {};
categoriesDb.getAllCategories = () => {
  categoriesModal
    .find()
    .then((res) => [console.log("asdf", res)])
    .catch((err) => {
      console.log("error", err);
    });
};

categoriesDb.getAllCategories();

module.exports = categoriesDb;

const { getAllItems, getItems, setItem } = require("../models/itemsModal");

const getAllItemsService = async () => {
  const data = await getAllItems();
  if (data) {
    return data;
  } else {
    const err = new Error();
    err.status = 404;
    err.message = "No Items Found";
    throw err;
  }
};
const getItemsService = async (type) => {
  const data = await getItems(type);
  if (data) {
    return data;
  } else {
    const err = new Error();
    err.status = 404;
    err.message = "No Items Found";
    throw err;
  }
};
const setItemService = async (item) => {
  const data = await setItem(item);
  if (data) {
    return data;
  } else {
    const err = new Error();
    err.status = 404;
    err.message = "Failed to add item";
    throw err;
  }
};
module.exports = { getAllItemsService, getItemsService, setItemService };

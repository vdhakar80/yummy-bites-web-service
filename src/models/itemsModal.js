const { itemsModal } = require("./../utilities/connection");
const itemsDb = {};
itemsDb.getAllItems = async () => {
  const res = await itemsModal.find();
  //   console.log(
  //     "asdf",
  //     res,
  //     res.map((ele) => ele._id.toString())
  //   );
  return res;
};
itemsDb.getItems = async (type) => {
  const res = await itemsModal.find({ type: type });
  const response = res.map((ele) => {
    ele._id = ele._id.toString();
    return ele;
  });
  console.log(response);
  return response;
};
itemsDb.setItem = async (item) => {
  console.log("item", item);
  const newItem = new itemsModal(item);
  const res = await newItem.save();
  console.log("asdf", res);
  return res;
};
itemsDb.setMultipleItems = (item) => {
  const res = itemsModal.insertMany(items);
  console.log("asdf", res);
  return res;
};

// itemsDb.setItem({
//   itemId: "4",
//   image: "rtyu",
//   name: "idli",
//   price: "70",
//   Description: "rice and vegihjs",
//   type: "idli",
// });

// itemsDb.getItems("pizza");
module.exports = itemsDb;

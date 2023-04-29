const express = require("express");
const {
  getAllItemsService,
  getItemsService,
  setItemService,
} = require("../services/itemsService");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await getAllItemsService();
    res.send(data);
  } catch (err) {
    next(err);
  }
});
router.get("/:itemType", async (req, res, next) => {
  try {
    const itemType = req.params.itemType;
    const data = await getItemsService(itemType);
    res.send(data);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    console.log("Vicky", req.body);
    const body = req.body;
    const data = await setItemService(body);
    res.send(data);
  } catch (err) {
    next(err);
  }
});
module.exports = router;

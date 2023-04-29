const express = require("express");
const multer = require("multer");
const { Buffer } = require("node:buffer");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), (req, res, next) => {
  const image = {
    contentType: req.file.mimetype,
    data: req.file.buffer,
  };
  const img = new Buffer(image.data, "binary").toString("base64");
  const imageUrl = "data:" + image.contentType + ";base64," + img;
  res.json({ imageUrl: image, temp: imageUrl });
});

module.exports = router;

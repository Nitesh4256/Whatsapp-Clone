const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb+srv://${username}:${password}@cluster0.6bgfh1i.mongodb.net/`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      return {
        bucketName: "photos",
        filename: `${Date.now()}-blog-${file.originalname}`,
      };
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });

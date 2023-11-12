const grid = require("gridfs-stream");
const mongoose = require("mongoose");

const url = "http://localhost:8000";

let gfs;
let gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

const uploadImage = (request, response) => {
  console.log("upload", request.file);
  if (!request.file) return response.status(404).json("File not found");

  const imageUrl = `${url}/file/${request.file.filename}`;

  response.status(200).json(imageUrl);
};

module.exports = uploadImage;

const express = require("express");
const { addUser } = require("../controller/user-controller");
const { getUser } = require("../controller/user-controller");
const { newConversation } = require("../controller/conversation-controller");
const { getConversation } = require("../controller/conversation-controller");
const { newMessage, getMessages } = require("../controller/message-controller");
const uploadFile = require("../controller/image-controller");
const getImage = require("../controller/getImage-controller");
const upload = require("../utills/upload");

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);
route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getImage);

module.exports = route;

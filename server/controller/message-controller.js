const conversation = require("../model/Conversation");
const Message = require("../model/Message");
const Conversation = require("../model/Conversation");
exports.newMessage = async (req, res) => {
  try {
    const newMessage = await new Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res.json("message send success");
  } catch (error) {
    console.log("Error in geting USers");
    console.log(error);
  }
};

exports.getMessages = async (req, res) => {
  try {
    console.log("req", req.params);
    const messages = await Message.find({ conversationId: req.params.id });
    console.log(messages);
    return res.json(messages);
  } catch (error) {
    console.log("Error while getingmessage");

    console.log(error);
  }
};

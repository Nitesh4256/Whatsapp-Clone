const Conversation = require("../model/Conversation");
exports.newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;

    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      return res.json({
        message: "Conversation already exist",
      });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();

    return res.json({
      success: true,
    });
  } catch (error) {
    console.log("errror n new COnversation");
    console.log(error);
  }
};

exports.getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    console.log("senderIS", senderId);
    const receiverId = req.body.receiverId;

    let conversation = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    return res.status(200).json(conversation);
  } catch (error) {
    console.log(error);

    console.log("Error while getConversation....");
  }
};

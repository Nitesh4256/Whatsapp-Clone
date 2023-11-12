const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    recieverId: {
      type: String,
    },
    text: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const message = mongoose.model("Message", MessageSchema);

module.exports = message;

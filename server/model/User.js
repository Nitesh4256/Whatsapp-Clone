const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  iss: {
    type: String,
  },
  sub: {
    type: String,
    required: true,
  },

  email_verified: {
    type: Boolean,
  },

  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  family_name: {
    type: String,
    required: true,
  },
  iat: {
    type: Number,
  },
  exp: {
    type: Number,
  },
});

const user = mongoose.model("User", userSchema);
module.exports = user;

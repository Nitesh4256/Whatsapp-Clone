const User = require("../model/User");

exports.addUser = async (req, res) => {
  try {
    const exist = await User.findOne({ sub: req.body.sub });

    if (exist) {
      return res.json({
        success: true,
        message: "User already exist.",
      });
    }

    const s = await User.create({
      iss: req.body.iss,

      sub: req.body.sub,
      email_verified: req.body.email_verified,
      name: req.body.name,
      picture: req.body.picture,
      family_name: req.body.family_name,
      iat: req.body.iat,
      exp: req.body.exp,
    });
    console.log(s);
    return res.json({
      sccess: true,
    });
  } catch (error) {
    console.log("error in User Contronnerr");

    console.log(error);
    return error;
  }
};
exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({
      data: users,
    });
  } catch (error) {
    console.log("Error in geting USers");
    console.log(error);
  }
};

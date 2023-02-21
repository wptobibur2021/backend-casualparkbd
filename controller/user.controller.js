const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userCreateServices } = require("../services/user.services");
const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  try {
    const pass = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(pass, salt);
    const userData = {
      ...req.body,
      password: hashedPass,
    };
    const result = await userCreateServices(userData);
    await res.status(200).json({
      status: "success",
      data: result,
      error: null,
    });
  } catch (e) {
    await res.status(500).json({
      status: "error",
      data: null,
      error: e.message,
    });
  }
  next();
};
exports.userLogin = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return await res.status(500).json({
        message: "User Not Found",
      });
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      return await res.status(500).json({
        message: "Wrong Password",
      });
    }
    if (user && validPass) {
      const jwtToken = jwt.sign(
        {
          userName: user._doc.userName,
          email: user._doc.email,
        },
        process.env.JWT_KEY,
        { expiresIn: "1h" },
      );
      const { password, ...others } = user._doc;
      await res.status(200).json({
        status: "success",
        data: others,
        token: jwtToken,
        error: null,
      });
    }
  } catch (e) {
    await res.status(500).json({
      status: "error",
      data: null,
      error: e.message,
    });
  }
  next();
};

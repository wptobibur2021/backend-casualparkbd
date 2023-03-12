const nodemailer = require("nodemailer");

exports.mailSend = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "wpdevelopment20@gmail.com", // generated ethereal user
      pass: "cipgqgpkcogihrbc", // generated ethereal password
    },
  });
};

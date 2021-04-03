const nodeMailer = require("nodemailer");

exports.sendEmail = (req, res) => {
  let userEmail = req.body.email;
  let userName = req.body.name;
  let userMessage = req.body.message;

  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let message = {
    from: userEmail,
    to: process.env.EMAIL,
    subject: userName,
    text: `Here is a question from ${userName} with email ${userEmail}. Message: ${userMessage}`,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return res.status(400).json({
        message: error,
      });
    } else {
      return res.json({
        message: info,
      });
    }
  });
};

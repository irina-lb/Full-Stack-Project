//packages import
const express = require("express");

//router
const router = express.Router();

//controllers import
const { sendEmail } = require("../controllers/mail");

router.post("/send", sendEmail);

module.exports = router;

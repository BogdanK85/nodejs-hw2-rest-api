const sgMail = require("@sendgrid/mail");
require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;
const SENDGRID_API_KEY =
  "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";

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "bogdankobak@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;

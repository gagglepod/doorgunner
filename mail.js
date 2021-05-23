const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "private-api-key-goes-here",
    domain: "sandbox-domain-key-goes-here",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: "yourname@email.com", // Change to MailGun Authorized Recipient
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });

  // Exporting the sendmail
  module.exports = sendMail;
};

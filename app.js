const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const smtpTransport = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_SECRET,
  },
});

async function run() {
  let sendResult = await smtpTransport.sendMail({
    from: "Kyle <gagglepod@gmail.com",
    to: "gagglepod@gmail.com",
    subject: "Hello from NodeMailer",
    text: "Howdy! This is DOORGUNNER! I just sent you an email from NodeJS and NodeMailer via Mailgun! If you are seeing this, your code worked! Congradulations!!",
    html: "<body><h1>Hello!</h1><p>Howdy! This is DOORGUNNER! I just sent you an email from NodeJS and NodeMailer via Mailgun! If you are seeing this, your code worked! Congratulations!!</p></body>",
  });

  console.log(sendResult);
}

run().catch((err) => console.error(err));

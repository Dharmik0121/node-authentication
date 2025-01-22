const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  // debug: true, // Enable debug output
  // logger: true, // Log information to the console
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error connecting to SMTP server:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

module.exports = transporter;

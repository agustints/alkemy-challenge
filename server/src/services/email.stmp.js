import nodemailer from "nodemailer";
const smtp = () => {
  let smtpTransport = nodemailer.createTransport({
    direct: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  return smtpTransport;
};

export default smtp;

const mailOptions = async (email, subject, message, html) => {
  let options = {
    from: process.env.EMAIL,
    to: email,
    subject,
    text: message,
    html: html,
  };
  return options;
};
export default mailOptions;

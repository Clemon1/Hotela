import nodemailer from "nodemailer";

// Email Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  port: 465,
  secure: true,
  auth: {
    user: process.env.Email,
    pass: process.env.Password,
  },
});
// Verify the transporter
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export const sendMail = async ({ fullname, email, OTP, subject, message }) => {
  let mailMessage = {
    from: `<${email}>`, // sender address
    to: process.env.Email, // list of receivers
    subject: `${subject}`, // Subject line
    html: `
    <body>
    <b>Welcome ${fullname},</b>
    <b>Your OTP : ${OTP}</b>
     <p> ${message}</p>
    </body>`, // html body
  };
  await transporter.sendMail(mailMessage);
};

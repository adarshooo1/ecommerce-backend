const passport = require("passport");
//
//
//
//
//
//
//
//
// Email Service
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "adarshsinghak001@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});
//
//
//
//
//
//
//
//
//
exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};

exports.sendMail = async function ({to, from, subject, html}) {
  const info = await transporter.sendMail({
    from: '"Shop @ E-commerce" <shop@ecommerce.com>', // sender address <shop@eocmmerce.com will be replace with actual email address who is sending then email.>
    to, // list of receivers
    subject, // Subject line
    // text, // plain text body
    html, // html body
  });
};

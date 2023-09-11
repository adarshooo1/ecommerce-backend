const passport = require("passport");

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
  // TODO: This is a temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmQzYmRiYmY1NGUxZTIwYmRkODg0ZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NDQyOTYxNn0.I5sNFMt1mrCAgp5HcccOl9yfAD10wmGM4Xq6RAP7V5E";
  return token;
};

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
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDVmNGVkODUxOWVjOGU5YjI5NzY3ZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0ODg5MjQ3fQ.8aMubUulz7I36QZWVcNgFx5uF5yjCNfmW2Oh_4Rxvsc";
  return token;
};

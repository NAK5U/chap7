const jwt = require("jsonwebtoken");

function authOnly(req, res, next) {
  const token = req.session.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err || !decodedToken) {
      return res.redirect("/");
    }
    req.userId = decodedToken.id;
    next();
  });
}

module.exports = { authOnly };
const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);
    const { userName, email } = decode;
    req.userName = userName;
    req.email = email;
    next();
  } catch (err) {
    next("Not authorization");
  }
};

module.exports = checkAuth;

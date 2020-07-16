require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const headerToken = req.headers["authorization"];
  if (headerToken == null || undefined) {
    return res.status(401).json({ err: "no token provided" });
  }
  const token = headerToken.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log("token valido");
    next();
  });
}

module.exports = authenticateToken;

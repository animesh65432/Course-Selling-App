const jwttokens = require("jsonwebtoken");
const User = require("../model/user.js");

const Secrect = "AnimeshDutta";
const CreatetheJwttokens = (obj) => {
  let token = jwttokens.sign(obj, Secrect, {
    expiresIn: "1hr",
  });

  return token;
};

const Verifythejwttokens = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token is missing." });
  }

  try {
    const decoded = jwttokens.verify(token, Secrect);
    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      return res.status(401).json({ message: "Access denied. Invalid token." });
    }

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Access denied. Invalid token." });
    } else if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Access denied. Token has expired." });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

module.exports = { CreatetheJwttokens, Verifythejwttokens };

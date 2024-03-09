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

  const obj = jwttokens.verify(token, Secrect);
  console.log(obj);

  try {
    let response = await User.findOne(obj);
    next();
  } catch (error) {
    return res.status(404).json({ messege: "please sign in first" });
  }
};

module.exports = { CreatetheJwttokens, Verifythejwttokens };

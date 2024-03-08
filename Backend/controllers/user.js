const usermodel = require("../model/user.js");
const { CreatetheJwttokens } = require("../middlewares/authentication.js");

const signupthefunction = async (req, res) => {
  const { name, password } = req.body;

  if (name == "" && password == "")
    return res
      .status(404)
      .json({ messege: "please enter the full name and password" });

  let createnew = new usermodel({ name: name, password: password });
  try {
    let reponse = await createnew.save();
    let token = CreatetheJwttokens({ name: name, password: password });
    res
      .status(200)
      .json({ messege: "sucessfully log in", token: token, reponse });
  } catch (error) {
    console.log(error);
  }
};
const loginthefunction = async (req, res) => {
  const { name, password } = req.body;

  if (name == "" || password == "")
    return res
      .status(404)
      .json({ messege: "please put your valid name and password" });

  try {
    let response = await usermodel.findOne({ name, password });
    let token = CreatetheJwttokens({ name: name, password: password });
    return res
      .status(200)
      .json({ messege: "successfully login", response, token: token });
  } catch (errors) {
    return res.status(500).json({ messege: "Internal server error", errors });
  }
};

module.exports = {
  signupthefunction,
  loginthefunction,
};

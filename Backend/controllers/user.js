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
      .json({ message: "Please provide a valid name and password" });

  try {
    const user = await usermodel.findOne({ name: name, password: password });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Please sign up first." });
    }

    const token = CreatetheJwttokens({ name: name, password: password });

    return res.status(200).json({
      message: "Successfully logged in",
      token: token,
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  signupthefunction,
  loginthefunction,
};

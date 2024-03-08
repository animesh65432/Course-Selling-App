const usermodel = require("../model/user.js");

const signupthefunction = async (req, res) => {
  const { name, password } = req.body;

  if (name == "" || password == "")
    return res
      .status(200)
      .json({ messege: "please fill the name and password " });

  const newuser = new usermodel({ name: name, password: password });

  try {
    let response = await newuser.save();
    return res
      .status(200)
      .json({ messege: "You Sucessfully sign in", response });
  } catch (errors) {
    return res.status(400).json({ messege: "something Went Wrong" });
  }
};

const loginthefunction = async (req, res) => {
  const { name, password } = req.body;

  if (name == "" || password == "")
    return res
      .status(404)
      .json({ messege: "please put your valid name and password" });

  try {
    let response = await usermodel.findOne({ name, password }); // Find by both name and password
    if (response) {
      return res.status(200).json({ messege: "successfully login", response });
    } else {
      return res.status(404).json({ messege: "login failed" });
    }
  } catch (errors) {
    return res.status(500).json({ messege: "Internal server error", errors });
  }
};

module.exports = {
  signupthefunction,
  loginthefunction,
};

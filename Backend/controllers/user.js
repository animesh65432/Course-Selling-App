const usermodel = require("../model/user.js");

const signupthefunction = async (req, res) => {
  console.log(req.body);
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

module.exports = {
  signupthefunction,
};

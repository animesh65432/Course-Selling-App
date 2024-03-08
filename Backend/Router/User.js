const express = require("express");
const { signupthefunction } = require("../controllers/user.js");
const Router = express.Router();

Router.post("/", signupthefunction);

module.exports = {
  Router,
};

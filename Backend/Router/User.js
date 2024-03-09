const express = require("express");
const {
  signupthefunction,
  loginthefunction,
} = require("../controllers/user.js");

const Router = express.Router();

Router.post("/", signupthefunction);

Router.post("/login", loginthefunction);

module.exports = Router;

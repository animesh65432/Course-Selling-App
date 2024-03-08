const express = require("express");
const { Verifythejwttokens } = require("../middlewares/authentication.js");
const {
  createthecourse,
  EdittheCourse,
  Getthecourse,
  Deletethecourse,
} = require("../controllers/Course.js");
const CourseRouter = express.Router();

CourseRouter.post("/Create", Verifythejwttokens, createthecourse);
CourseRouter.post("/Edit", Verifythejwttokens, EdittheCourse);
CourseRouter.get("/Get", Verifythejwttokens, Getthecourse);
CourseRouter.delete("/Delete", Verifythejwttokens, Deletethecourse);

module.exports = CourseRouter;

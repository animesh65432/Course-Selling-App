const express = require("express");
const {
  createthecourse,
  EdittheCourse,
  Getthecourse,
  Deletethecourse,
} = require("../controllers/Course.js");
const CourseRouter = express.Router();

CourseRouter.post("/Buy", createthecourse);
CourseRouter.post("/Edit", EdittheCourse);
CourseRouter.get("/Get", Getthecourse);
CourseRouter.delete("/Delete", Deletethecourse);

module.exports = CourseRouter;

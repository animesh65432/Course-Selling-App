const express = require("express");
const app = express();
const Router = require("./Router/User.js");
const database = require("./database/db.js");
const CourseRouter = require("./Router/Course.js");

app.use(express.json());

app.use("/User", Router);
app.use("/Course", CourseRouter);

database
  .then(() => {
    console.log("You are Connected to DataBase");
  })
  .catch(() => {
    console.log("you are not connected to database");
  });

app.listen(3000, () => {
  console.log("We Severe in the port");
});

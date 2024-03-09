const coursemodel = require("../model/course.js");

const createthecourse = async (req, res) => {
  let { coursename, price, Photourl } = req.body;

  if (coursename == "" && price == "" && Photourl == "")
    return res.status(200).json({ messege: "Please Give Me Full Input Data" });

  const new_course = new coursemodel({
    coursename: coursename,
    price: price,
    Photourl: Photourl,
  });

  try {
    let response = new_course.save();

    return res
      .status(202)
      .json({ messege: "Sucessfull Create Course ", response });
  } catch (errors) {
    return res.status(400).json({ messege: "Network Errors" });
  }
};

const Getthecourse = async (req, res) => {
  try {
    const courses = await coursemodel.find({});
    return res.status(200).json({ success: true, data: courses });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to fetch courses",
      error: error.message,
    });
  }
};

const EdittheCourse = async (req, res) => {
  const { _id } = req.query;
  console.log(_id);

  try {
    let response = await coursemodel.findByIdAndUpdate(_id, { ...req.body });
    return res
      .status(200)
      .json({ message: "Edit The Course Successfully", response });
  } catch (error) {
    return res.status(404).json({ message: "Network Errors" });
  }
};

const Deletethecourse = async (req, res) => {
  const { _id } = req.query;

  try {
    let response = await coursemodel.findByIdAndDelete(_id);
    return res.status(200).json({ message: "Successfully Deleted", response });
  } catch (errors) {
    return res.status(404).json({ message: "Network Errors" });
  }
};

module.exports = {
  createthecourse,
  EdittheCourse,
  Getthecourse,
  Deletethecourse,
};

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  coursename: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  Photourl: {
    type: String,
    required: true,
  },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const coursemodel = mongoose.model("course", courseSchema);

module.exports = coursemodel;

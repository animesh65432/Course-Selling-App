import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const CreatCourse = () => {
  const [coursename, setcoursename] = useState("");
  const [price, setprice] = useState("");
  const [Photourl, SetPhotourl] = useState("");
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (coursename == "" && price == "" && Photourl == "")
      return alert("please fill each and every box");

    const sucefully = () => {
      console.log("sucessfully post it");
    };

    const Erros = () => {
      console.log("Somwthing Went Worng");
    };
    axios
      .post(
        "http://localhost:3000/Course/Create",
        {
          coursename: coursename,
          price: price,
          Photourl: Photourl,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then(sucefully)
      .catch(Erros);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <TextField
            label="Course Name"
            variant="outlined"
            value={coursename}
            onChange={(e) => setcoursename(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Photo URL"
            variant="outlined"
            value={Photourl}
            onChange={(e) => SetPhotourl(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreatCourse;

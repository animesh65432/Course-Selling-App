import { useState } from "react";
import { useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpDateCourse = () => {
  const [coursename, setcoursename] = useState("");
  const [price, setprice] = useState("");
  const [Photourl, SetPhotourl] = useState("");
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!coursename || !price || !Photourl) {
      alert("Please fill in each and every box");
      return;
    }

    axios
      .post(
        `http://localhost:3000/Course/Edit?_id=${id}`,
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
      .then((response) => {
        console.log("Successfully Updated:", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong:", error);
      });
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
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UpDateCourse;

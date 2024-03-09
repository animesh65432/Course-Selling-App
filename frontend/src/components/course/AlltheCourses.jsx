import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";

const AlltheCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let response = await axios.get("http://localhost:3000/Course/Get", {
          headers: {
            token: token,
          },
        });
        setCourses(response?.data?.data);
      } catch (errors) {
        console.log(errors);
      }
    };

    fetchCourses();
  }, []);

  console.log(courses);

  if (courses.length === 0) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" color="error">
          You Don't Have Any Courses Yet
        </Typography>
      </Container>
    );
  }
  return <>{}</>;
};

export default AlltheCourses;

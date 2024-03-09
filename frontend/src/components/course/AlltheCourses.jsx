import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AlltheCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const Navigate = useNavigate();

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

  const Ontoggoleupdate = (id) => {
    Navigate(`/Updatecourse/${id}`);
  };

  const OndeleteCourse = async (id) => {
    console.log(id);
    try {
      let response = await axios.delete(
        `http://localhost:3000/Course/Delete?_id=${id}`,
        {
          headers: {
            token: token,
          },
        }
      );
      const flterarray = courses.filter((obj) => obj._id != id);
      setCourses(flterarray);
    } catch (error) {
      console.log(error);
    }
  };

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
  return (
    <Container>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item key={course._id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={course.Photourl}
                alt={course.coursename}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.coursename}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {course.price}
                </Typography>
              </CardContent>

              <Button
                variant="contained"
                color="error"
                onClick={() => Ontoggoleupdate(course._id)}
              >
                update
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => OndeleteCourse(course._id)}
              >
                Delete
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AlltheCourses;

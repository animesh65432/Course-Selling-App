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
} from "@mui/material";

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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AlltheCourses;

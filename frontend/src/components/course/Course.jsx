import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginLeft: "100px",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          maxWidth: "80%",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgUiJgWY6gPK4lEjy1T-z5SO_yQ0_DY9BHEk_W-coKIVV_mWFrGBPDgTzE6njkbf8BJ8&usqp=CAU"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          alt="Course Image"
        />
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link to="/Courses" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Check Out Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;

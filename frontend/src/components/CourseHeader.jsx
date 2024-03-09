import React from "react";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { removetoken } from "../store/authslice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CourseHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removetoken());
    navigate("/");
  };

  return (
    <div style={{ position: "absolute", top: "20px", right: "20px" }}>
      <Link to="/createcourse">
        <Button variant="contained" color="primary">
          Create Course
        </Button>
      </Link>
      <Button variant="contained" onClick={handleLogout} color="error">
        Logout
      </Button>
    </div>
  );
};

export default CourseHeader;

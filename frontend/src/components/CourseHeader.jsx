import React from "react";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { removetoken } from "../store/authslice";
import { useNavigate } from "react-router-dom";

const CourseHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removetoken());
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default CourseHeader;

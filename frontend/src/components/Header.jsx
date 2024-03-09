import React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "start" }}>
      <Link to="/">
        <Button variant="contained" style={{ marginRight: "10px" }}>
          Singin
        </Button>
      </Link>
      <Link to="/Login">
        <Button variant="contained">login</Button>
      </Link>
    </Box>
  );
};

export default Header;

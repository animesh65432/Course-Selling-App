import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();

  const OnclicktoSingin = () => {
    Navigate("/");
  };

  const Oncliktologin = () => {
    Navigate("/Login");
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "start" }}>
      <Button
        variant="contained"
        style={{ marginRight: "10px" }}
        onClick={OnclicktoSingin}
      >
        Singin
      </Button>
      <Button variant="contained" onClick={Oncliktologin}>
        login
      </Button>
    </Box>
  );
};

export default Header;

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { singintheuser } from "../custom/singintheuser";

const Singin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const Onsubmithandler = (e) => {
    e.preventDefault();
    if (name == "" && password == "") return alert("Please inputh the Data");

    singintheuser({ name: name, password: password });
  };

  return (
    <div style={{ marginLeft: "600px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "300px" }}>
          <form onSubmit={Onsubmithandler}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              placeholder="Please put your name here"
              value={name}
              onChange={handleNameChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              placeholder="Please put your password here"
              value={password}
              onChange={handlePasswordChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Singin;

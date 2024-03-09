import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { loginuser } from "../custom/loginuser";
import { useDispatch } from "react-redux";
import { addthetokens } from "../../store/authslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const Navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const Onsubmithandler = async (e) => {
    e.preventDefault();
    if (name == "" && password == "") return alert("Please inputh the Data");
    let token = await loginuser({ name: name, password: password });
    dispath(addthetokens(token));
    Navigate("/");
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
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Login;

import React from "react";
import Singin from "./components/auth/Singin";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Singin />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
export default App;

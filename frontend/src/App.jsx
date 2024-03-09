import React from "react";
import Singin from "./components/auth/Singin";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
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

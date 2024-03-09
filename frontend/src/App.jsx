import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Singin from "./components/auth/Singin";
import Login from "./components/auth/Login";
import Course from "./components/course/Course";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = !!token;

  return (
    <>
      {isLoggedIn ? (
        <>
          <Routes>
            <Route path="/" element={<Course />} />
          </Routes>
        </>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Singin />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;

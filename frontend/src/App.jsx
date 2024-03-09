import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Singin from "./components/auth/Singin";
import Login from "./components/auth/Login";
import CourseHeader from "./components/CourseHeader";
import Course from "./components/course/Course";
import { useNavigate } from "react-router-dom";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = !!token;
  const Navigate = useNavigate();

  if (token) {
    Navigate("/");
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <CourseHeader />
          <Routes>
            <Route path="/" element={<Course />}></Route>
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

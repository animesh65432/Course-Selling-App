import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Singin from "./components/auth/Singin";
import Login from "./components/auth/Login";
import CourseHeader from "./components/CourseHeader";
import Course from "./components/course/Course";
import AlltheCourses from "./components/course/AlltheCourses";
import CreatCourse from "./components/course/CreatCourse";
import UpDateCourse from "./components/course/Updatethecourse";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = !!token;

  return (
    <>
      {isLoggedIn && (
        <>
          <CourseHeader />
          <Routes>
            <Route path="/" element={<Course />} />
            <Route path="/Courses" element={<AlltheCourses />} />
            <Route path="/createcourse" element={<CreatCourse />}></Route>
            <Route path="/Updatecourse/:id" element={<UpDateCourse />}></Route>
          </Routes>
        </>
      )}
      {!isLoggedIn && (
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

import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentsEditor.js";
import Grades from "./Grades";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs"; 
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const URL = "http://localhost:4000/api/courses";
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const {pathname} = useLocation();
  const [screen] = pathname.split("/");
  // const course = courses.find((course) => course._id === courseId);
  const linkToIconMap = {
    BsFillMenuButtonWideFill: <BsFillMenuButtonWideFill className="wd-icon" />
  };
  return (
    <div>
        <div className="wd-breadcrumb wd-home">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li> <Link>
                 {linkToIconMap["BsFillMenuButtonWideFill"]}
                </Link>
            </li>
            <li className="breadcrumb-item">{course.number}</li>
            <li>Courses {course.name} / </li>
            <li class="breadcrumb-item active" aria-current="page">{screen}</li>
            </ol>
        </nav>
        <hr />
        </div>
    
      <CourseNavigation />
     
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "220px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>

    </div>
  );
}

export default Courses;
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState,useEffect } from "react";
import store from "./Store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const URL = "http://localhost:4000/api/courses";
   const [courses, setCourses] = useState([]);
   const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
   
   const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([...courses,response.data]);
  };
   

   const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    if (response.status === 204) {
      setCourses(courses.filter((course) => course._id !== courseId));
    } else {
      console.error("Failed to delete course. Status code: " + response.status);
    }
   };
   const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`,course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
  };

    return(
      <Provider store={store}>
       <div style={{height:"100vh"}}>
         <Nav/>
          <div className="d-flex" style={{ width: '100%', height: '100%'}} >
            <KanbasNavigation/>
            <div style={{width: "100%"}}>
               <Routes>
               <Route path="/" element={<Navigate to= "Dashboard" />} />
               <Route path="/Account" element={<h1>Account</h1>}/>
               <Route path="Dashboard" element={<Dashboard 
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
               } />
               <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
               <Route path="Calendar" element={<h1>Calendar</h1>}/>
               </Routes>
            </div>
         </div>

       </div>
       </Provider>
    );
 }
 export default Kanbas
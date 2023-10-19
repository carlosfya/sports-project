import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return(
       <div>
         <Nav/>
          <div className="d-flex" style={{ width: '100%', height: '100%'}} >
            <KanbasNavigation/>
            <div>
               <Routes>
               <Route path="/" element={<Navigate to= "Dashboard" />} />
               <Route path="/Account" element={<h1>Account</h1>}/>
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/:courseId/*" element={<Courses />} />
               <Route path="Calendar" element={<h1>Calendar</h1>}/>
               </Routes>
            </div>
         </div>

       </div>
    );
 }
 export default Kanbas
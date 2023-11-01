import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Midterm from "./ExamPractice";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
   return (
      <HashRouter>
         <div  style={{ width: '100%', height: '100%'}} >
         <Routes>
         <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/ExamPractice/*" element={<Midterm/>}/>

        </Routes>
   
      </div>
      </HashRouter>
   );
}
export default App;
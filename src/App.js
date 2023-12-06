   import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";
function App() {
   return (
      <HashRouter>

         <div  style={{ width: '100%', height: '100%'}} >
         <Routes>
         <Route path="/"         element={<Navigate to="/project/signin"/>}/>
          <Route path="/project/*" element={<Project/>}/>

        </Routes>
   
      </div>
      </HashRouter>
   );
}

export default App;
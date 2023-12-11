import { Routes, Route, Navigate } from "react-router-dom";
import Soccer from "./soccer.js";
import Tennis from "./tennis.js";
import RoutesFormula1 from "./Formula1/index.js";
import BasketballGamesByDate from "./Basketball/Games.js";
import Basketball from "./Basketball/basketball.js";


function Sports(){
    return(
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="soccer" />} />
          <Route path="/soccer" element={<Soccer />} />
            <Route path="/formula1/*" element={<RoutesFormula1/>} />
           <Route path="/tennis" element={<Tennis/>}/>
           <Route path="/basketball" element={<Basketball/>} />
          <Route path="/Games" element={<BasketballGamesByDate/> } />
      </Routes>
    </div>
    )
}
export default Sports
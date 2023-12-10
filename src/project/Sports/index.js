import { Routes, Route, Navigate } from "react-router-dom";
import Soccer from "./soccer.js";
import Tennis from "./tennis.js";
import BasketBall from "./basketball.js";
import RoutesFormula1 from "./Formula1/index.js";

function Sports(){
    return(
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="soccer" />} />
          <Route path="/soccer" element={<Soccer />} />
            <Route path="/formula1/*" element={<RoutesFormula1/>} />
          <Route path="/basketBall" element={<BasketBall />} />
           <Route path="/tennis" element={<Tennis/>}/>
      </Routes>
    </div>
    )
}
export default Sports
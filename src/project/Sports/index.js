import { Routes, Route, Navigate } from "react-router-dom";
import Soccer from "./soccer.js";
import Tennis from "./tennis.js";
import BasketBall from "./Basketball/basketball.js";
import Formula1 from "./Formula1/formula1.js";
import BasketballGamesByDate from "./Basketball/Games.js";

function Sports(){
    return(
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="soccer" />} />
          <Route path="/soccer" element={<Soccer />} />
            <Route path="/formula1" element={<Formula1 />} />
          <Route path="/basketball" element={<BasketBall />} />
          <Route path="/Games" element={<BasketballGamesByDate />} />

           <Route path="/tennis" element={<Tennis/>}/>
      </Routes>
    </div>
    )
}
export default Sports
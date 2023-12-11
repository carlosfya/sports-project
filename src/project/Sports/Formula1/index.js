import { Routes, Route, Navigate } from "react-router-dom";
import Formula1 from "./drivers.js";
import Races from "./races.js";
import DriverDetails from "./driverDetails.js";
import RaceInfo from "./raceInfo.js";

function RoutesFormula1() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="drivers" />} />
      <Route path="/drivers" element={<Formula1 />} />
      <Route path="/drivers/:driverTitle" element={<Formula1 />}  />
      <Route path="/drivers/info/:driverTitle" element={<DriverDetails/>}  />
      <Route path="/races" element={<Races />} />
      <Route path="/races/:date" element={<RaceInfo/>} />
    </Routes>
  );
}

export default RoutesFormula1;

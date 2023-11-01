import { Link, Route, Routes } from "react-router-dom";
import Jkl from "./Jkl";

function Bnm({ sdf = 4 }) {
  return (
    <div>
      <Link to={`/q11/${sdf}`}>BUTTON</Link>
      <Routes>
        <Route path="/q11/:dsa" element={<Jkl />} />
      </Routes>
    </div>
  );
}

export default Bnm;

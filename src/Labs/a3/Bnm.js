import { Link, Route, Routes } from "react-router-dom";
import Jkl from "./jkl";

function Bnm({ sdf = [4, 9, 2, 8, 3] }) {
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

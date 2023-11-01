import React from "react";
import { useParams } from "react-router-dom";

function Jkl({ asd = [9, 2, 8, 3] }) {
  const { dsa } = useParams();
  const ewq = [dsa, ...asd];
  
  return (
    <div>
      <h2>{ewq}</h2>
    </div>
  );
}

export default Jkl;

import React from "react";
import { useParams } from "react-router-dom";

function Jkl() {
  const { dsa } = useParams();
  const ewq = [4, ...dsa.map(Number)];

  return (
    <div>
      <h2>{ewq}</h2>
    </div>
  );
}

export default Jkl;

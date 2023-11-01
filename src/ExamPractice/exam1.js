import React from "react";
function Exam1() {
    const ewq = [321, 432, 543, 654, 765];
    const tre = (ytr, uyt) => {
    const poi = ewq.map(
        (iuy) => (iuy === ytr ? uyt : iuy));
    console.log(poi);
    };
    const qwe = {asd: 123, bnm: 345}
    const wer = {bnm: 234,...qwe, cvb: 456}
    
    console.log(wer)

    return (
    <div>
    <button onClick={() => tre(543, 999)}>
    BUTTON
    </button>
    </div>
    );
   }
   export default Exam1;


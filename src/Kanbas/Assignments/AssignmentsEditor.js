import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
 
  };
  return (
    <div style={{marginTop: "60px"}}>
       <button className="btn btn-secondary float-end" type="button">
        <BsThreeDotsVertical/>
      </button>
      <button className="btn float-end" style={{ color: 'green' }} type="button">
        Published
      </button>
      <br />
      < BsFillCheckCircleFill
        aria-hidden="true"
        style={{ color: 'green', right: '0', position: 'absolute', top: '70px', marginRight: '125px' }}
      />
      <hr />
      <h4>{assignment.title}</h4>
      <input className="form-control" defaultValue={assignment.title} />
      <button onClick={handleSave} className="btn btn-success float-end">
        Save
      </button>
      <Link
        className="btn btn-warning float-end"
        to={`/Kanbas/Courses/${courseId}/Assignments`}
      >
        Cancel
      </Link>
      <button className="btn btn-danger float-end">Delete</button>
    </div>
  );
}

export default AssignmentEditor;
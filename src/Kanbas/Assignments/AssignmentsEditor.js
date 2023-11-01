import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { deleteAssignment } from "./AssigmentsReducer";

function AssignmentEditor() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.AssignmentsReducer.assignments);
  const assignment = useSelector((state) => state.AssignmentsReducer.assignment);
  const dispatch = useDispatch();

  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <button className="btn btn-secondary float-end" type="button">
        <BsThreeDotsVertical />
      </button>
      <button className="btn float-end" style={{ color: 'green' }} type="button">
        Published
      </button>
      <br />
      <BsFillCheckCircleFill
        aria-hidden="true"
        style={{ color: 'green', right: '0', position: 'absolute', top: '70px', marginRight: '125px' }}
      />
      <hr />
      {assignments.map((assignment, index) => (
        <div key={index}>
          <h4>{assignment.title}</h4>
          <input className="form-control" defaultValue={assignment.title} />
        </div>
      ))}
      <button onClick={handleSave} className="btn btn-success float-end">
        Save
      </button>
      <Link
        className="btn btn-warning float-end"
        to={`/Kanbas/Courses/${courseId}/Assignments`}
      >
        Cancel
      </Link>
      <button
        className="btn btn-danger float-end"
        onClick={() => dispatch(deleteAssignment(assignment._id))}
      >
        Delete
      </button>
    </div>
  );
}

export default AssignmentEditor;

import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  const buttonStyle = {
    fontSize:'15px',height:"30px"
  };

  return (
    <div  style={{marginTop: "60px"}}>
        <button className="btn btn-secondary float-end" style={buttonStyle}>
          <BsThreeDotsVertical/>
        </button>
        <button className="btn btn-secondary dropdown-toggle float-end" style={buttonStyle}>
          <i className="fa fa-download" aria-hidden="true"></i>
          Export
        </button>
        <button className="btn btn-secondary float-end" style={buttonStyle}>
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
          Import
        </button>
        <h1>Grades</h1>
        <table className="table table-striped">  
          <thead style={{backgroundColor: "black", color: "white"}}>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div>);
}
export default Grades;
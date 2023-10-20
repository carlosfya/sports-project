import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs"; 

function Dashboard() {
  const courses = db.courses;
  const linkToIconMap = {
    Pencil: <BsFillPencilFill className="wd-icon" />
  };

  return (
    <div style={{marginLeft: "30px"}}>
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published Courses ({courses.length})</h2>
      <hr/>
      <div className="row row-cols-1 row-cols-md-3 g-4 wd-card-width-container">
        {courses.map((course, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src="/images/blue.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title wd-txt-blue">{course.name}</h5>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">{course.number}</p>
                <Link>
                  {linkToIconMap["Pencil"]}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

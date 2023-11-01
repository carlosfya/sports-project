import "./index.css";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs"; 

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }  
) {
  const linkToIconMap = {
    Pencil: <BsFillPencilFill className="wd-icon" />
  };


  return (
    <div style={{marginLeft: "20px"}}>
      <h1>Dashboard</h1>
      <hr/>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className= "btn btn-primary float-end" onClick={updateCourse}>Update</button>
      <button className= "btn btn-primary float-end" onClick={addNewCourse}>Add</button>

      <h2>Published Courses({courses.length})</h2>
      <hr/>
      <div className="row row-cols-1 row-cols-md-3 g-4 wd-card-width-container">
        {courses.map((course, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src="/images/blue.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title wd-txt-blue">{course.name}</h5>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  <button className="btn btn-secondary" style={{position: "relative", top: "-210px", right: "-35px", height: "30px"}}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }} 
              >Delete</button>
              <button className="btn btn-secondary" style={{position: "relative", top: "-210px", right: "-35px", height: "30px"}}
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>
                  {course.name}
                </Link>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">{course.number}</p>
                <Link style={{position: "relative", top: "-300px", right: "-180px"}} onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
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


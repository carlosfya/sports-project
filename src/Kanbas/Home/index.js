import ModuleList from "../Modules/ModulesList.js";
import Status from "./Status.js";

function Home() {
  return (
    <div className="row"  style={{marginTop: "80px"}}>
     
      <div className="col-10"  style={{width: "70%"}}>
      <button className="btn btn-danger float-end" style={{ backgroundColor: 'red' }}><i className="fa fa-plus" aria-hidden="true"></i>Module</button>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa fa-check-circle-o" aria-hidden="true"></i>
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>Action</li>
        </ul>
      </div>
      <button className="btn btn-secondary float-end">Collapse All</button>
      <button className="btn btn-secondary float-end">View Progress</button>  


        <h1>Home</h1>
        <ModuleList />
      </div>
      <div className="col-2"><Status/></div>
    </div>
  );
}

export default Home;
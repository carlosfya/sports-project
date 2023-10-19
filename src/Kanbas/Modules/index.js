import ModuleList from "./ModulesList";

function Modules() {
  return (
    <div  style={{marginTop: "60px"}}>
         <button className="btn btn-danger float-end" style={{ backgroundColor: 'red' }}><i className="fa fa-plus" aria-hidden="true"></i>Module</button>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa fa-check-circle-o" aria-hidden="true"></i>
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <button className="btn btn-secondary float-end">Collapse All</button>
      <button className="btn btn-secondary float-end">View Progress</button>  

      <h1>Modules</h1>
      <ModuleList />
    </div>
  );
}

export default Modules;
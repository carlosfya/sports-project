import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div >
      <li className="list-group-item" style={{height: "35px"}}>
      <button className="btn btn-danger float-end" style={{height: "30px"}}
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
        <button className="btn btn-danger float-end" style={{height: "30px"}} onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add</button>
          <button  className="btn btn-secondary float-end"  style={{height: "30px"}}  onClick={() => dispatch(updateModule(module))}>
                Update
            </button>
        <input className="btn btn-secondary float-end" style={{height: "30px"}} value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea className="btn btn-secondary float-end" style={{height: "30px"}} value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

      <ul className="list-group">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item"   style={{
            borderLeft: 'solid green 3px'
          }}>
            <button className="btn btn-secondary float-end" style={{height: "30px"}} 
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            {module.name}
            {module.lessons && module.lessons.length > 0 && (
              <ul className="list-group" > 
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">
                    {lesson.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  update_Module,
  setModule,
  setModules,
} from "./modulesReducer";
import React, { useEffect } from "react";
import { findModulesForCourse,createModule,delete_Module,updateModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = async(moduleId) => {
    const response = await delete_Module(moduleId);
    dispatch(deleteModule(moduleId));
    console.log(response.status)
  };
  const handleUpdateModule = async () => {
    const response = await updateModule(module);
    dispatch(update_Module(module));
    console.log(response.status)
  };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
 
  return (
    <div >
      <li className="list-group-item" style={{height: "35px"}}>
      <button className="btn btn-danger float-end" style={{height: "30px"}}
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
        <button className="btn btn-danger float-end" style={{height: "30px"}} onClick={handleAddModule}>
          Add</button>
          <button  className="btn btn-secondary float-end"  style={{height: "30px"}}  onClick={handleUpdateModule}>
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
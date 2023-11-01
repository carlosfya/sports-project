import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules/modulesReducer";
import AssignmentsReducer from "../Assignments/AssigmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    AssignmentsReducer  
  }
});


export default store;
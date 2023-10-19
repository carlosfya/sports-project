
import React from 'react';
import "./index.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import TodoList from '../Courses/todo/TodoList';



function Status() {
  const buttonGreenStyle = {
    backgroundColor: 'green',
    display: 'flex'
  };
  const flex = {
    display:'flex'
  }
  const button = {
    fontSize:'15px', width:"200px",height:"50px"
  }

  return (
    <div className="d-none d-lg-block wd-home">
      <h4>Course Status</h4>
      
      <div className='wd-flex-row-container'>
      <button type="button" className="btn btn-secondary" style={flex} >
        <BsXCircle/>Unpublish
        </button>
        <button type="button" className="btn btn-secondary" style={buttonGreenStyle} >
          <BsFillCheckCircleFill/>Published
        </button> 
      </div>
   
        <ul className="list-group-item">
        <li className="list-group-item">
          <button type="button" className="btn btn-secondary" style={button} >
            <BsPlusCircle/>
            Importing existing content
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-secondary" style={button}>
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>Importing From Commons
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-secondary" style={button}>
            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>Choose Home Page
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-secondary" style={button}>
          View Course Stream
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-secondary" style={button}>
          New Announcement
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-secondary" style={button}>
           New Analytics
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-secondary" style={button}>
           View Course Notifications
          </button>
        </li>
      </ul>
      
      <TodoList/>
      
      <ul className="list-group-item wd-specific">
        <li className="list-group-item">
          <a href="#">
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>Lecture
          </a>
        </li>
        <li className="list-group-item">
          <label style={{color: "grey"}}>CS4550.12631.202410 Sep 7 at 11:45am</label>
        </li>
        <li className="list-group-item">
          <a href="#">
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>CS4550.12631.202410
          </a>
        </li>
        <li className="list-group-item">
          <label style={{color: "grey"}}>CS4550.12631.202410 Sep 11 at 11:45am</label>
        </li>
        <li className="list-group-item">
          <a href="#">
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>CS5610.06.SP23
          </a>
        </li>
        <li className="list-group-item">
          <label style={{color: "grey"}}>CS5610.06.SP23 Lecture Sep 11 at 6pm</label>
        </li>
      </ul>


    </div>
  );
}

export default Status;
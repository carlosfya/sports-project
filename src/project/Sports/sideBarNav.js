// NavBar.js
import React from 'react';
import './sideBar.css'; // Import the corresponding CSS file
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import "./index.css";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";

function NavBar() {
  const links = ["LiveMatches", "Players", "Events"];
  const linkToIconMap = {
    LiveMatches: <MdLiveTv className="wd-icon" />,
    Players: <BiUserCircle className="wd-icon" />,
    Events: <BsFillCalendar2WeekFill className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;

// NavBar.js
import React from 'react';
import '../sideBar.css'; // Import the corresponding CSS file
import { Link, useLocation } from "react-router-dom";
import "../index.css";

function NavBar() {
  const links = ["Races", "Drivers"];
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
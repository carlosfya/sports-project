import React from 'react';
import '../sideBar.css';
import { Link, useLocation } from "react-router-dom";
import "../index.css";

function NavBar() {
  const links = ["basketball", "Games"];
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/Sports/${link}`}
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
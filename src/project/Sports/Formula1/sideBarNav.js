// NavBar.js

import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa'; // Import the desired icons
import { Link, useLocation } from 'react-router-dom';
import '../sideBar.css'; // Import the corresponding CSS file
import '../index.css';

function NavBar() {
  const links = ["races", "drivers"];
  const { pathname } = useLocation();

  const iconMap = {
    races: <FaFlag size={30} />, // Set the size prop to adjust the icon size
    drivers: <FaUser size={30} />, // Set the size prop to adjust the icon size
  };

  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/Sports/formula1/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {iconMap[link]}
          {link}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
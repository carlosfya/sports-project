// TopBarNav.js

import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './TopBarNav.css'; // Import the new CSS file

function TopBarNav() {
  const links = ["races", "drivers"];
  const { pathname } = useLocation();

  const iconMap = {
    races: <FaFlag size={30} />,
    drivers: <FaUser size={30} />,
  };

  return (
    <div className="list-group wd-kanbas-navigation">
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

export default TopBarNav;

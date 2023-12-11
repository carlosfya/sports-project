import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBasketballBall, FaGamepad } from 'react-icons/fa'; // Import the icons
import '../sideBar.css';
import "../index.css";

function NavBar() {
  const links = ["basketball", "Games"];
  const { pathname } = useLocation();

  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/Sports/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <br/>
          {link === "basketball" && <FaBasketballBall size={30} />} {/* Basketball Icon, adjust size as needed */}
          {link === "Games" && <FaGamepad size={30} />} {/* Games Icon, adjust size as needed */}
          {link}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;

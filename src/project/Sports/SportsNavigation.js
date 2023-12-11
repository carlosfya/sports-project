// SportsNavigation.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBasketballBall, FaCar } from 'react-icons/fa';
import { IoMdTennisball, IoMdFootball } from 'react-icons/io';
import "./SportsNavBar.css";

function SportsNavigation() {
  const links = ["soccer", "basketball", "formula1"];
  const { pathname } = useLocation();

  const iconMap = {
    soccer: <IoMdFootball />,
    basketball: <FaBasketballBall />,
    formula1: <FaCar />,
    tennis: <IoMdTennisball />,
  };

  return (
    <div className="SportsNavBar">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/Sports/${link}`}
          className={`SportsNavBarLink ${pathname.includes(link) && "active"}`}
        >
          {iconMap[link]}
          {link}
        </Link>
      ))}
    </div>
  );
}

export default SportsNavigation;

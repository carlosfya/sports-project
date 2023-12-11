// NavigationBar.js

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaSearch, FaFutbol, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import SportsNavigation from "../Sports/SportsNavigation";
import "./index.css";
import { useSelector } from "react-redux";

function NavigationBar() {
  const { currentUser } = useSelector((state) => state.user);
  const anomymousScreens = ["signin", "signup"];
  const signedinScreens = ["account", "users"];
  const anyoneScreens = ["Sports"];
  const { pathname } = useLocation();
  const [isSportsHovered, setIsSportsHovered] = useState(false);

  const handleSportsMouseEnter = () => {
    setIsSportsHovered(true);
  };

  const handleSportsMouseLeave = () => {
    setIsSportsHovered(false);
  };

  const handleSportsNavMouseEnter = () => {
    setIsSportsHovered(true);
  };

  const handleSportsNavMouseLeave = () => {
    setIsSportsHovered(false);
  };

  const iconMap = {
    signin: <FaSignInAlt />,
    signup: <FaUser />,
    account: <FaUser />,
    users: <FaUsers />,
    Sports: <FaFutbol />,
    Search: <FaSearch />,
    Players: <FaUser />,
    Events: <FaCalendarAlt />,
  };

  return (
    <>
      <div className="NavBar">
        {!currentUser &&
          anomymousScreens.map((screen) => (
            <Link
              key={screen}
              to={`/project/${screen}`}
              className={`NavBarLink ${pathname.includes(screen) && "active"}`}
            >
              {iconMap[screen]} {screen}
            </Link>
          ))}
        {currentUser &&
          signedinScreens.map((screen) => (
            <Link
              key={screen}
              to={`/project/${screen}`}
              className={`NavBarLink ${pathname.includes(screen) && "active"}`}
            >
              {iconMap[screen]} {screen}
            </Link>
          ))}
        {anyoneScreens.map((screen) => (
          <Link
            key={screen}
            to={`/project/${screen}`}
            className={`NavBarLink ${pathname.includes(screen) && "active"}`}
            onMouseEnter={screen === "Sports" ? handleSportsMouseEnter : undefined}
            onMouseLeave={screen === "Sports" ? handleSportsMouseLeave : undefined}
          >
            {iconMap[screen]} {screen}
          </Link>
        ))}
      </div>

      <div
        className={`SportsNavigation ${isSportsHovered ? "active" : ""}`}
        onMouseEnter={handleSportsNavMouseEnter}
        onMouseLeave={handleSportsNavMouseLeave}
      >
        <SportsNavigation />
      </div>
    </>
  );
}

export default NavigationBar;

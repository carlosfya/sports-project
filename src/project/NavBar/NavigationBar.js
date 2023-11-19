import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SportsNavigation from "../Sports/SportsNavigation";
import "./index.css";

function NavigationBar() {
  const links = ["Account", "Sports", "Search", "Players", "Events"];
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

  return (
    <>
      <div className="NavBar">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/project/${link}`}
            className={`NavBarLink ${pathname.includes(link) && "active"}`}
            onMouseEnter={link === "Sports" ? handleSportsMouseEnter : undefined}
            onMouseLeave={link === "Sports" ? handleSportsMouseLeave : undefined}
          >
            <br />
            {link}
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

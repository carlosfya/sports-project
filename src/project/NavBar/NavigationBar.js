import { Link, useLocation } from "react-router-dom";
import "./index.css";

function NavigationBar() {
  const links = ["Account", "Sports","Search","Players","Events"];
  const { pathname } = useLocation();

  return (
    <div className="NavBar">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link}`}
          className={`NavBarLink ${pathname.includes(link) && "active"}`}
         
        >
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}

export default NavigationBar;
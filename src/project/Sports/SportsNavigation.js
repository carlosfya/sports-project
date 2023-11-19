import { Link, useLocation } from "react-router-dom";
import "./SportsNavBar.css";

function SportsNavigation(){
    const links = ["soccer", "basketball","formula1","tennis"];
    const { pathname } = useLocation();
    return(
            <div className="SportsNavBar">
                {links.map((link, index) => (
                    <Link
                    key={index}
                    to={`/project/Sports/${link}`}
                    className={`SportsNavBarLink ${pathname.includes(link) && "active"}`}
                    
                    >
                    <br />
                    {link}
                    </Link>
               ))}
             </div>
    );    
}

export default SportsNavigation
import "../App.css";
import Account from "./Account/index.js";
import Events from "./Events/index.js";
import NavigationBar from "./NavBar/NavigationBar.js";
import Players from "./Players/index.js";
import Search from "./Search/index.js";
import Sports from "./Sports/index.js";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Project() {
  return (
    <div>
      <div>
        <Link to="/project/Account" className="App-title">
          <h2>Boston Sports</h2>
        </Link>
      </div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Players" element={<Players/>}/>
        <Route path="/Events" element={<Events/>}/>
      </Routes>
    </div>
  );
}

export default Project;

import "../App.css";
import Account from "./Account/account.js";
import UserDetail from "./Account/users/details.js";
import UserList from "./Account/users/list.js";
import Events from "./Events/index.js";
import NavigationBar from "./NavBar/NavigationBar.js";
import Players from "./Players/index.js";
import Search from "./Search/index.js";
import SignIn from "./SignIn/signin.js";
import SignUp from "./SignUp/signup.js";
import Sports from "./Sports/index.js";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import RootComponent from "./rootComponent";
import ProtectedRoute from "./protectedRoute";


function Project() {
  return (
    <Provider store={store}>
         <RootComponent show={true}>
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
                <Route path="/Sports/*" element={<Sports />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Players" element={<Players/>}/>
                <Route path="/Events" element={<Events/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>

                <Route path="/users" element={<UserList/>} />
                <Route path="/users/:id" element={<UserDetail/>} />
                <Route path="/Account/:id" element={<Account />} />
              </Routes>
            </div>
         </RootComponent>
    </Provider>
  );
}

export default Project;

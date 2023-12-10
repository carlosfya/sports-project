import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "./users/client";
import { Link } from "react-router-dom";
import "./index.css";
import * as reducer from "./users/reducer"
import { useDispatch } from "react-redux";

import { RiAccountCircleLine, RiAdminLine } from "react-icons/ri";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

function Account() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setCurrentUser(user);
  };

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const signout = async () => {
    await client.signOut();
    dispatch(reducer.setCurrentUser(null));
    navigate("/project/signin");
  };

  const updateUser = async () => {
    try {
      await client.updateUser(currentUser);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error updating user:", error);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

    const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleReturn = () => {
      // Handle return logic
      // For example, you can go back in the browser history
      navigate(-1); // Go back one step in the history
    };
  

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await client.account();
        setCurrentUser(currentUser);
        dispatch(reducer.setCurrentUser(currentUser));
      } catch (error) {
        navigate("/project/signin");
      }
    };
    if (id) {
      findUserById(id); 
    } else {
      fetchCurrentUser();
    }
  }, [id, navigate,dispatch]);

  if (!currentUser) return null;
 
  return (
    <div className="account-container">
    <div style={{ display: "flex", alignItems: "center" }}>
  {currentUser.role === "ADMIN" && (
    <Link to="/project/users" className="btn btn-warning" style={{ marginRight: "auto" }}>
       <RiAdminLine />All Users
    </Link>
  )}
  <h1 className="account-title" style={{ marginRight: "350px" }}>
    {currentUser.username}
  </h1>
  <b>Account created on: </b>
  <input
    type="date"
    value={currentUser.doh.split("T")[0]} // Assuming currentUser.dateCreated is in the format YYYY-MM-DD
    style={{ marginTop: "15px" }}
    readOnly // Make the input read-only to prevent user edits
  />
   {id && (
          <button type="button" className="btn btn-primary" onClick={handleReturn}>
            Return
          </button>
        )}
</div>

      <hr />
      {currentUser && (
        <div>
          <table className="table">
            <td>
              <label style={{ width: "100%" }}>
                <b> Username:</b>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={currentUser.username}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label style={{ width: "100%" }}>
                <b> FirstName:</b>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={currentUser.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label style={{ width: "100%" }}>
                <b> LastName:</b>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={currentUser.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
                <label style={{ width: "100%" }}>
                <b> Password:</b>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-control"
                  value={currentUser.password}
                  onChange={handleInputChange}
                />
              </label>
               <button type="button" className="btn btn-secondary" onClick={handleTogglePassword}>
              {showPassword ? "Hide Password" : "Show Password"}
              </button>
              <br />
              <b> Role:</b>
              <select className= "form-control" value={currentUser.role} onChange={handleInputChange} name = 'role'>
                <option value="USER">User</option>
                {currentUser.role === 'ADMIN' && <option value="ADMIN">Admin</option>}
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
              <td style={{ textAlign: "center" }}>
            {currentUser.role === "ADMIN" ? (
              <RiAdminLine size={50} />
            ) : (
              // You can choose different icons based on user roles
              currentUser.role === "FACULTY" ? (
                <FaUserTie size={50} />
              ) : currentUser.role === "STUDENT" ? (
                <FaUserGraduate size={50} />
              ) : (
                <BsFillPersonFill size={50} />
              )
            )}
          </td>

              <br />
              {/* Add more form fields for other user information */}
              <button type="submit" className="btn btn-secondary" onClick={updateUser}>
                Update Profile
              </button>
            </td>
            <td style={{ textAlign: "center" }}>
              <RiAccountCircleLine size={200} />
            </td>
          </table>
          

          {/* Displaying user information */}
          {/*<pre>{JSON.stringify(currentUser, null, 2)}</pre>*/}

          {/* Sign out button */}
        {!id && (
          <button onClick={signout} className="btn btn-danger">
            Sign Out
          </button>
        )}
          {/* Conditional rendering for admin users */}
    
        </div>
      )}
    </div>
  );
}

export default Account;

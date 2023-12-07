import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as client from "./client";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./list.css"

import {
  BsTrash3Fill, BsFillCheckCircleFill,
  BsPencil, BsPlusCircleFill,
} from "react-icons/bs";

function UserList() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
  const createUser = async () => {
    try {
      console.log('Creating user...');
      console.log('User data:', user);
  
      const newUser = await client.createUser(user);
      console.log('New User:', newUser);
  
      // Reset the user state to clear the input fields
      setUser({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
  
      // Update the users state with the new user
      setUsers([newUser, ...users]);
    } catch (err) {
      console.error('Error creating user:', err);
  
      // You might want to log more details about the error
      if (err.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status:', err.response.status);
        console.error('Response data:', err.response.data);
      } else if (err.request) {
        // The request was made but no response was received
        console.error('No response received. The request was made:', err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', err.message);
      }
    }
  };
  
  
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };


  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  
  const handleCreateUser = async () => {
    // Call the function to create a user
    await createUser();

    // After creating the user, fetch the updated list of users
    await fetchUsers();
  };

  const selectUser = async (user) => {
    try {
      console.log(user)
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
      console.log(status)
    } catch (err) {
      console.log(err);
    }
  };
  const handleReturn = () => {
    navigate(-1); // Go back one step in the history
  };



  return (
    <div>
      <div style={{ display: "flex" }}>
  <h1 style={{ marginLeft: "20px" }}>User List</h1>
  <button
    type="button"
    className="btn btn-primary"
    style={{ marginLeft: "auto" }} 
    onClick={handleReturn}
  >
    Return
  </button>
</div>

      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {currentUser.role === 'ADMIN' ? (
  <tr>
    <td>
      <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
    </td>
    <td>
      <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
    </td>
    <td>
      <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
    </td>
    <td>
      <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
    </td>
    <td className="text-nowrap">
      <BsFillCheckCircleFill onClick={updateUser} className="me-2 text-success fs-1 text" />
      <BsPlusCircleFill onClick={handleCreateUser} className="text-success fs-1 text" />
    </td>
  </tr>
) : null}

        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <Link to={`/project/users/${user._id}`} className="user-link">
                  {user.username}
                </Link>
              </td>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
              {currentUser.role === 'ADMIN' && (
                <>
                  <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                    <BsTrash3Fill />
                  </button>
                  <button className="btn btn-warning me-2" onClick={() => selectUser(user)}>
                    <BsPencil />
                  </button>
                </>
              )}

            </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;